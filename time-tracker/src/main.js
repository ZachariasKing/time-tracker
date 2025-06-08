import TimerController from "./controllers/TimerController.js";
import Timer from "./models/Timer.js";
import LocalStorageTimerRepository from "./repositories/LocalStorageRepository.js";
import TimerView from "./views/timerView.js"

// main.js is the main entry point and plugs in the logic to the HTML for the Time Tracker application.

// Create Instances
const timerModel = new Timer();
const timerRepository = new LocalStorageTimerRepository();
const timerView = new TimerView();
const timerController = new TimerController(timerView, timerModel, timerRepository);

//Try to resume from saved state
timerController.resumeFromSaved();

// Hook up start button to click listener to start the timer
document.getElementById("start-timer-button").addEventListener("click", () => {

  const timerInputValue = document.getElementById("time-input").value;
  if (timerInputValue === "") {
    console.warn("Please enter a duration in seconds.");
    return;
  } else if (timerController.isRunning()) {
    console.warn(
      "A timer is already running. Please stop it before starting a new one."
    );
    return;
  }

  /*Convert HH:MM:SS to integer of seconds*/
  const hms = timerInputValue;
  const [hours, minutes, seconds] = hms.split(":");
  const totalSeconds = +hours * 60 * 60 + +minutes * 60 + +seconds;
  timerController.startTimer(totalSeconds);
});

/* Hook up clock event listener to clear button */
document
  .getElementById("clear-timer-button")
  .addEventListener("click", () => {timerController.clearTimer();});

assignQuickTimerOnClick();

/* Provides functionality to the quick timer buttons retrieving an attribute called 'data-duration' with the value in seconds and starting a timer instance of this value */
function assignQuickTimerOnClick() {
  let collection = document.getElementsByClassName("quick-timer-button");
  for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener("click", function () {
      if (timerController.isRunning()) {
        console.warn(
          "A timer is already running. Please stop it before starting a new one."
        );
        return;
      }
      const duration = parseInt(this.getAttribute("data-duration"), 10);
      timerController.startTimer(duration);
    });
  }
}
