import { Timer } from '../models/Timer.js';
import { updateTimerDisplay, clearTimerDisplay } from '../views/timerView.js';

// This function initializes a new Timer instance and starts it.
let timer; 

export function startTimer(duration = 7200) {
  timer = new Timer(duration); // 2 hours in seconds
  timer.start(updateTimerDisplay);
}

export function pauseTimer() {
  timer?.pause();
}

export function clearTimer() {
  timer?.clear();
  timer ? clearTimerDisplay() : console.warn("No timer to clear.");
  timer = null; // Reset the timer instance
}

export function isRunning() {
  return timer?.getIsRunning();
}

