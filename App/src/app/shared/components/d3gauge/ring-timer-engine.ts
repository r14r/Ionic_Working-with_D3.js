import { Subject } from 'rxjs';

import * as d3 from 'd3'; // for the interval function

import { TimerTimeData } from './ring-timer-config.interface';

export class RingTimerEngine {

	public timeDataSubject: Subject<any>;
	public phaseSubject: Subject<any>;
	public initSubject: Subject<any>;
	public pausePingSubject: Subject<any>;
	public finishedSubject: Subject<any>;

	private warmUpFor: number;
	private countdownFor: number;
	private warningFor: number;
	private countdownToTime: number;
	private countdownRemaining: number;
	private warmUpRemaining: number;

	private myD3Timer: any;
	private config: any;

	protected timeData: TimerTimeData[];

	initRingerTimeData() {

		const MILLISECS_IN_MILLISEC = 1;
		const MILLISECS_IN_SECOND = 1000;
		const MILLISECS_IN_MINUTE = 60000;
		const MILLISECS_IN_HOUR = 3600000;
		const MILLISECS_IN_DAY = 86400000;

		const SECONDS_IN_MINUTE = 60;
		const MINUTES_IN_HOUR = 60;
		const HOURS_IN_DAY = 24;
		const DAYS_IN_YEAR = 365;

		this.timeData = [
			{ idx: 0, t: 'MILLISEC', s: MILLISECS_IN_MILLISEC, max: MILLISECS_IN_SECOND, value: 0, baseZeroToOne: 0, singleDecValue: 0 },
			{ idx: 1, t: 'SECONDS', s: MILLISECS_IN_SECOND, max: SECONDS_IN_MINUTE, value: 0, baseZeroToOne: 0, singleDecValue: 0 },
			{ idx: 2, t: 'MINUTES', s: MILLISECS_IN_MINUTE, max: MINUTES_IN_HOUR, value: 0, baseZeroToOne: 0, singleDecValue: 0 },
			{ idx: 3, t: 'HOURS', s: MILLISECS_IN_HOUR, max: HOURS_IN_DAY, value: 0, baseZeroToOne: 0, singleDecValue: 0 },
			{ idx: 4, t: 'DAYS', s: MILLISECS_IN_DAY, max: DAYS_IN_YEAR, value: 0, baseZeroToOne: 0, singleDecValue: 0 }
		];
	}

	loadDefaultConfig() {
		const config = {
			updateInterval: 21, // ms time between updates to text and micTimer arcs.
			timeUnitCount: 5, // number of micTimers in the component
			countdownFor: 15000,  // countdown time in ms
			warmUpFor: 3000,  // countdown time in ms
			warningFor: 1000,  // countdown time in ms

			calc: {
				phase: 'ready', // 'warmup', 'countdown', 'warning', 'finished', 'paused', 'stopped'
				previousPhase: 'ready', // 'warmup', 'countdown', 'warning', 'finished', 'paused', 'stopped'
				warmUpMessage: 'ready...'
			}
		};
		this.config = config;
	}

	constructor() {
		this.initSubjects();
		this.loadDefaultConfig();
	}

	private initSubjects() {
		this.timeDataSubject = new Subject<any>();
		this.phaseSubject = new Subject<any>();
		this.initSubject = new Subject<any>();
		this.pausePingSubject = new Subject<any>();
		this.finishedSubject = new Subject<any>();
	}

	public getTimeData(): any {
		return this.timeData;
	}

	public getPhase(): string {
		return this.config.calc.phase;
	}

	public getTimeUnitCount(): number {
		return this.config.timeUnitCount;
	}

	public getWarmUpRemaining(): number {
		return this.warmUpRemaining;
	}

	public setWarmUpFor(warmUpFor: number): void {
		this.warmUpFor = warmUpFor;
	}
	public setCountdownFor(countdownFor: number): void {
		this.countdownFor = countdownFor;
	}
	public setWarningFor(warningFor: number): void {
		this.warningFor = warningFor;
	}

	private loadParentConfig(): void {
		this.config.warmUpFor = this.warmUpFor;
		this.config.countdownFor = this.countdownFor;
		this.config.warningFor = this.warningFor;
	}

	// **
	// ** Timer functions
	// **

	// Timer Initialisation
	public initTimer(): void {
		console.log('in initTimer');
		this.readyTimer();
		this.initChanged();
	}

	private readyTimer(): void {
		// load configuration data
		this.loadDefaultConfig();
		this.loadParentConfig();
		// load fresh Time Data object
		this.initRingerTimeData();
		// calculate the time to run the timer
		this.setCountdownToTime();
		// setup the number of time units to process.
		this.calcInitialTimeUnitCount();
		this.pruneTimeDataArray();

		this.setPhaseByValue('ready');
		const time = this.setTimeRemainingAndPhase();
		this.updateTimeData(time);
	}

	// Public Timer Controls
	public startTimer(): void {
		if (this.config.calc.phase !== 'ready') {
			return;
		}

		this.setPhaseByValue('warmup');
		this.setCountdownToTime();

		this.runTimer();
	}

	private runTimer(): void {
		const self = this;
		this.myD3Timer = d3.interval(elapsed => {
			// check if time is up or if it has been stopped by the user.
			if (self.isTimerFinishedOrStopped()) {
				self.myD3Timer.stop();
				self.update();
				self.resetTimer();
			} else {
				self.update();
			}
		}, this.config.updateInterval);
	}

	public pauseTimer(): void {
		this.config.calc.previousPhase = this.config.calc.phase;
		this.myD3Timer.stop();
		this.setPhaseByValue('paused');
		this.runTimer();
	}

	public unPauseTimer(): void {
		this.myD3Timer.stop();
		this.setPhaseByValue(this.config.calc.previousPhase);
		this.countdownToTime = new Date().getTime() + this.countdownRemaining;
		this.runTimer();
	}

	public stopTimer(): void {
		this.myD3Timer.stop();
		this.setPhaseByValue('stopped');
		this.runTimer();
	}

	private resetTimer(): void {
		this.readyTimer();
		this.finishedChanged();
	}


	private setCountdownToTime(): void {
		const currentTime = new Date().getTime();
		this.countdownToTime = currentTime + this.config.countdownFor + this.config.warmUpFor;
	}

	// **
	// ** update is called by the main timer interval, it simply calls the methods required to
	// ** update the time information and redraw the timer components d3 objects.
	// **
	private update(): void {
		const time = this.setTimeRemainingAndPhase();

		if (!this.isTimerPaused()) {
			this.updateTimeData(time);
		} else {
			this.pausePing();
		}
	}

	// TODO refactor this long multi-purpose function
	// TODO remove switch statement, may move to polymorphic or delegation solution.
	private setTimeRemainingAndPhase(): number {
		let time = 0;

		// store the new time remaining and exit
		// check that we aren't already paused, stopped or finished.
		switch (this.config.calc.phase) {
			case 'ready':
				this.countdownRemaining = this.config.countdownFor + this.config.warmUpFor;
				time = this.config.countdownFor;
				break;
			case 'warmup':
			case 'countdown':
			case 'warning':
				time = Math.max(0, this.countdownToTime - (new Date().getTime()));
				this.countdownRemaining = time;
				this.setPhase(this.countdownRemaining);
				if (this.config.calc.phase === 'warmup') {
					time = Math.min(time, this.config.countdownFor);
					this.warmUpRemaining = Math.max(0, this.countdownRemaining - this.config.countdownFor);
				}
				break;
			case 'paused':
				break;
			case 'finished':
			case 'stopped':
				this.countdownRemaining = 0;
				break;
			default:
				// typically would throw error here rather than console.log
				console.log('error we have an unrecognised timer status');
		}
		return time;
	}

	private updateTimeData(time: number): void {
		const timeInMS = time;

		for (let i = this.timeData.length - 1; i >= 0; i--) {
			const td = this.timeData[i];
			const value = time / td.s;
			td.singleDecValue = timeInMS / td.s;
			time -= Math.floor(value) * td.s;
			td.value = Math.floor(value);
			td.baseZeroToOne = (td.value / td.max);

			if (this.isTimerFinishedOrStopped()) {
				td.singleDecValue = 0;
				td.baseZeroToOne = 0;
			}
		}
		this.timeDataChanged();
	}

	// Notify Observers of change
	private timeDataChanged(): void {
		if (this.timeDataSubject !== undefined) {
			this.timeDataSubject.next(true);
		}
	}

	private pausePing(): void {
		if (this.pausePingSubject !== undefined) {
			this.pausePingSubject.next(true);
		}
	}

	private phaseChanged(): void {
		if (this.phaseSubject !== undefined) {
			this.phaseSubject.next(true);
		}
	}

	private initChanged(): void {
		if (this.initSubject !== undefined) {
			this.initSubject.next(true);
		}
	}

	private finishedChanged(): void {
		if (this.finishedSubject !== undefined) {
			this.finishedSubject.next(true);
		}
	}

	// Pull a phase change into the queue
	private setPhaseByValue(phase): void {
		const t = d3.timer(() => {
			this.config.calc.phase = phase;
			this.phaseChanged();
			t.stop();
		}, 0);
	}

	// Set the phase based on the timer's time.
	// TODO remove switch statement, may move to polymorphic or delegation solution.
	private setPhase(timeRemaining): void {
		// this should only be calls when the timer is actively running (i.e. phase warmup, countdown and warning)
		if (this.config.calc.phase === 'warmup' || this.config.calc.phase === 'countdown' || this.config.calc.phase === 'warning') {
			if (timeRemaining > this.config.countdownFor) {
				this.setPhaseByValue('warmup');
			} else if ((timeRemaining <= this.config.countdownFor) && (timeRemaining > this.config.warningFor)) {
				this.setPhaseByValue('countdown');
			} else if ((timeRemaining <= this.config.warningFor) && (timeRemaining > this.config.updateInterval)) {
				this.setPhaseByValue('warning');
			} else if (timeRemaining <= this.config.updateInterval) {
				// less than an interval to go - let's finish up.
				this.setPhaseByValue('finished');
			} else {
				// typically would throw error here rather than console.log
				console.log('Error in ring-timer.component.ts=>setPhase');
			}
		}
	}

	private isTimerPaused(): boolean {
		return (this.config.calc.phase === 'paused');
	}

	private isTimerFinishedOrStopped(): boolean {
		return (this.config.calc.phase === 'finished' || this.config.calc.phase === 'stopped');
	}

	// **
	// ** Determine number of Time Units to be processed
	// **
	private calcInitialTimeUnitCount(): void {
		const time = Math.abs(this.countdownToTime - (new Date().getTime()) - +this.config.warmUpFor);
		console.log('in calcInitialTimeUnitCount=>this.countdownToTime: ' + this.countdownToTime);
		console.log('in calcInitialTimeUnitCount=>time: ' + time);
		console.log('in calcInitialTimeUnitCount=>getTime: ' + new Date().getTime());
		console.log('in calcInitialTimeUnitCount=>this.timeData.length: ' + this.timeData.length);
		for (let timeUnitCount = this.timeData.length - 1; timeUnitCount >= 0; timeUnitCount--) {
			const td = this.timeData[timeUnitCount];
			if (time > td.s) {
				this.config.timeUnitCount = (timeUnitCount + 1);
			}
		}
		console.log('in calcInitialTimeUnitCount=>this.config.timeUnitCount: ' + this.config.timeUnitCount);
	}

	private pruneTimeDataArray(): void {
		// remove unneeded rows from the timeData array.
		const arrSize = this.timeData.length;
		for (let i = arrSize - 1; i > this.config.timeUnitCount; i--) {
			this.timeData.pop();
		}
	}
}
