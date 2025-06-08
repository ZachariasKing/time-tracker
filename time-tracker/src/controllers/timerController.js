import Timer from "../models/Timer.js";

// This function initializes a new Timer instance and starts it.
export default class TimerController {
  constructor(timerView, timerModel, timerRepository) {
    this.model = timerModel;
    this.repo = timerRepository;
    this.interval = null;
    this.timerView = timerView;
  }

  startTimer(duration) {
    if (this.model?.getIsRunning()) {
      console.warn(
        "A timer is already running. Please stop it before starting a new one."
      );
      return;
    }
    this.model = new Timer(duration, new Date());
    this.model.setIsRunning(true);
    this.repo.save(this.model);
    this.model.start((remaining) => {
      this.timerView.updateTimerDisplay(this.model.remaining);
      this.timerFinished(remaining);
    });
  }

  pauseTimer() {
    timer?.pause();
  }

  clearTimer() {
    if (this.model) {
      this.repo.clear();
      this.model.clear();
      this.timerView.clearTimerDisplay();
      this.model = null;
    } else {
      console.warn("No timer to clear.");
      this.timerView.clearTimerDisplay(); // Optionally clear display even if no timer
    }
  }

  isRunning() {
    return this.model?.getIsRunning();
  }

  setRemainingTime(remaining) {
    if (this.model) {
      this.model.remaining = remaining;
    } else {
      console.warn("No timer instance to set remaining time.");
    }
  }

  resumeFromSaved() {
    this.timerView.toggleLoadingSpinner(true);
    const saved = this.repo.load();
    if (saved) {
      // Ensure the saved timer is properly initialized
      let savedTimerCompletionSeconds =
        saved?.startTime?.getTime() / 1000 + saved?.duration;

      let remainingTimeSeconds = Math.floor(
        savedTimerCompletionSeconds - Date.now() / 1000
      );

      // If there is still remaining time in the saved session then set timer countdown 
      if (remainingTimeSeconds > 0) {
        this.model = saved;
        this.setRemainingTime(
          remainingTimeSeconds > 0 ? remainingTimeSeconds : 0
        );
        if (this.model.getIsRunning()) {
          this.model.start(this.timerView.updateTimerDisplay);
        }
      } else {
        this.repo.clear();
      }
    } else{
      this.timerView.setBlankTimer();
    }
    this.timerView.toggleLoadingSpinner(false);
  }

  timerFinished(secondsRemaining) {
    if (secondsRemaining === 0) {
      this.repo.clear();
    }
  }
}
