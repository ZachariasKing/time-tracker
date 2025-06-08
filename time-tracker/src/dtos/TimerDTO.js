/* TimerDTO represents the object with attributes of the current timer that can be serialized to a string in local storage. */
export default class TimerDTO {
  constructor(duration, startTime, isRunning) {
    this.duration = duration;
    this.startTime = startTime; // string (ISO) or null
    this.isRunning = isRunning;
  }
}