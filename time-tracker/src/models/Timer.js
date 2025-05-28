// Timer class models a countdown timer with methods to start, pause, reset, and get the remaining time in hours, minutes, and seconds.
export class Timer {
  constructor(durationSeconds = 7200) {
    this.duration = durationSeconds;
    this.remaining = durationSeconds;
    this.interval = null;
    this.isRunning = false;
  }

  start(callback) {
    if (this.isRunning) return;
    this.isRunning = true;

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

  reset() {
    this.pause();
    this.remaining = this.duration;
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
}