import {
  clearTimer,
  startTimer,
  pauseTimer,
  isRunning,
} from "./controllers/timerController.js";

// main.js is the main entry point and plugs in the logic to the HTML for the Time Tracker application.
document
  .getElementById("start-timer-button")
  .addEventListener("click", startTimer);
document
  .getElementById("clear-timer-button")
  .addEventListener("click", clearTimer);
  
assignQuickTimerOnClick();

/* Provides functionality to the quick timer buttons retrieving an attribute called 'data-duration' with the value in seconds and starting a timer instance of this value */
function assignQuickTimerOnClick() {
  let collection = document.getElementsByClassName("quick-timer-button");

  for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener("click", function () {
      if (isRunning()) {
        console.warn(
          "A timer is already running. Please stop it before starting a new one."
        );
        return;
      }
      const duration = parseInt(this.getAttribute("data-duration"), 10);
      startTimer(duration);
    });
  }
}


