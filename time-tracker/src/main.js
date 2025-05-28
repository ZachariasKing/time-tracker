// main.js is the main entry point for the Time Tracker application.

import { startTimer } from './controllers/timerController.js';

document.getElementById('start-button').addEventListener('click', startTimer);