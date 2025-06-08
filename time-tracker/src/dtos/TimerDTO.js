import  Timer from '../models/Timer.js';

/* TimerDTO represents the object with attributes of the current timer that can be serialized to a string in local storage. */
export class TimerDTO {
  constructor(duration, startTime, isRunning) {
    this.duration = duration;
    this.startTime = startTime; // string (ISO) or null
    this.isRunning = isRunning;
  }

  static fromTimerModel(timer) {
    return new TimerDTO(
      timer.duration,
      timer.startTime ? timer.startTime.toISOString() : null,
      timer.isRunning
    );
  }

  toTimerModel() {
    return new Timer(
      this.duration,
      this.startTime ? new Date(this.startTime) : null,
      this.isRunning
    );
  }
}