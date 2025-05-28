import { Timer } from '../models/Timer.js';
import { updateTimerDisplay } from '../views/timerView.js';

// This function initializes a new Timer instance and starts it.
let timer = new Timer(); // 2 hours = 7200s

export function startTimer() {
  timer.start(updateTimerDisplay);
}

export function pauseTimer() {
  timer.pause();
}

export function resetTimer() {
  timer.reset();
  updateTimerDisplay(timer.remaining);
}

export function clearTimer() {
  timer.clear();
  updateTimerDisplay(timer.remaining);
}