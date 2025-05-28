import { clearTimer, startTimer } from './controllers/timerController.js';

// main.js is the main entry point and plugs in the logic to the HTML for the Time Tracker application.
document.getElementById('timer-circle').addEventListener('click', startTimer);
document.getElementById('timer-clear').addEventListener('click', clearTimer);