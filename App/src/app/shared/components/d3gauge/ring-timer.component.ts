import { Component, EventEmitter, OnChanges, SimpleChange, Input, Output, AfterViewInit } from '@angular/core';

import { RingTimerEngine } from './ring-timer-engine';
import { RingTimerGraphics } from './ring-timer-graphics';

@Component({
	selector: 'ring-timer',
	templateUrl: 'ring-timer.component.html'
})
export class RingTimerComponent implements OnChanges, AfterViewInit {
	@Input() timerAction: any;
	@Input() warmUpFor: any;
	@Input() countdownFor: any;
	@Input() warningFor: any;

	@Output() finished = new EventEmitter<boolean>();

	changeLog: string[] = [];
	config: any;
	ringTimerEngine: RingTimerEngine;
	ringTimerGraphics: RingTimerGraphics;

	constructor() {
		this.ringTimerEngine = new RingTimerEngine();
		this.ringTimerGraphics = new RingTimerGraphics(this.ringTimerEngine);
		this.ringTimerEngine.finishedSubject.subscribe(data => { this.onTimerFinished(); });
		this.loadDefaultConfig();
	}

	loadDefaultConfig() {
		const config = {
			countdownFor: 15000,
			warmUpFor: 3000,
			warningFor: 1000,
		};
		this.config = config;
	}

	ngAfterViewInit() {
		this.loadParentConfig();
		this.ringTimerEngine.initTimer();
	}

	// **
	// ** Respond to messages from parent
	// **
	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		const log: string[] = [];
		for (const key in changes) {
			if (changes[key].isFirstChange()) {
				const changedProp = changes[key];

				const to = JSON.stringify(changedProp.currentValue);
				log.push(`Initial value of ${key} set to ${to}`);
				this.handlePropName(key, changedProp.currentValue, changes[key].isFirstChange());
			} else {
				const changedProp = changes[key];

				const to = JSON.stringify(changedProp.currentValue);
				const from = JSON.stringify(changedProp.previousValue);
				log.push(`${key} changed from ${from} to ${to}`);
				this.handlePropName(key, changedProp.currentValue, changedProp.isFirstChange());
			}
		}
		this.changeLog.push(log.join(', '));
		// console.log(JSON.stringify(this.changeLog));
	}

	handlePropName(propName, propValue, isFirstChange: boolean) {
		switch (propName) {
			case 'timerAction':
				this.handleTimerAction();
				break;
			case 'warmUpFor':
			case 'countdownFor':
			case 'warningFor':
				this.config[propName] = parseInt(propValue, 10);
				if (!isFirstChange) {
					this.loadParentConfig();
					this.ringTimerEngine.initTimer();
				}
				break;
		}
	}

	handleTimerAction() {
		console.log('in handleTimerAction');
		switch (this.timerAction) {
			case ('start'):
				this.ringTimerEngine.startTimer();
				break;
			case ('pause'):
				this.ringTimerEngine.pauseTimer();
				break;
			case ('unPause'):
				this.ringTimerEngine.unPauseTimer();
				break;
			case ('stop'):
				this.ringTimerEngine.stopTimer();
				break;
			case ('stopped'):
				// do nothing - just a bounce back from notifying the parent that timer has finished.
				break;
			case ('init'):
				// do nothing - just the TimerAction being set for the first time.
				console.log('in init case');
				break;
		}
	}

	private onTimerFinished() {
		// send a message back to the parent
		console.log('about to emit \'finished\' to parent');
		this.finished.emit();
	}

	// **
	// ** Load Timer's Time Settings
	// **
	loadParentConfig() {
		console.log('in loadParentConfig');
		this.config.warmUpFor = parseInt(this.warmUpFor, 10);
		this.config.countdownFor = parseInt(this.countdownFor, 10);
		this.config.warningFor = parseInt(this.warningFor, 10);

		this.ringTimerEngine.setWarmUpFor(parseInt(this.warmUpFor, 10));
		this.ringTimerEngine.setCountdownFor(parseInt(this.countdownFor, 10));
		this.ringTimerEngine.setWarningFor(parseInt(this.warningFor, 10));
	}
}
