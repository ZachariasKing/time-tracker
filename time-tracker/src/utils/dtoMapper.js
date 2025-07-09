import Timer from "../models/Timer";
import TimerDTO from "../dtos/TimerDTO";

export default class DtoMapper {
static fromTimerModel(timer) {
    return new TimerDTO(
      timer.duration,
      timer.startTime ? timer.startTime.toISOString() : null,
      timer.isRunning
    );
  }

 static toTimerModel(timerDto) {
    return new Timer(
      this.duration = timerDto.duration,
      this.startTime = new Date(timerDto.startTime),
      this.isRunning = timerDto.isRunning
    );
  }
}