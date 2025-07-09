// Timer class models a countdown timer with methods to start, pause, reset, and get the remaining time in hours, minutes, and seconds.
export default class Timer {
  constructor(durationSeconds = 7200, startTime = null, isRunning = false) {
    this.duration = durationSeconds;
    this.remaining = durationSeconds;
    this.startTime = startTime; // string (ISO) or null
    this.interval = null;
    this.isRunning = isRunning;
  }

  start(callback) {
    callback(this.remaining)
    this.interval = setInterval(() => {
      if (this.remaining > 0) {
        this.remaining--;
        callback(this.remaining);
      } else {
        this.pause();
        callback(0); // timer completed
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  clear() {
    this.pause();
    this.remaining = 0;
  }

  getTimeParts() {
    const hrs = Math.floor(this.remaining / 3600);
    const mins = Math.floor((this.remaining % 3600) / 60);
    const secs = this.remaining % 60;
    return { hrs, mins, secs };
  }

  getIsRunning() {
    return this.isRunning;
  }

  setIsRunning(isRunning){
    this.isRunning = isRunning;
  }


}