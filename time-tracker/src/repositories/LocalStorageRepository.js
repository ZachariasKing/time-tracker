
import ITimerRepository  from '../interfaces/ITimerRepository.js';
import TimerDTO from '../dtos/TimerDTO.js';
import DtoMapper from '../utils/dtoMapper.js';

// LocalStorageTimerRepository.js is the implementation of a timer repository that uses localStorage to persist timer data.
export default class LocalStorageTimerRepository extends ITimerRepository {
  constructor(key = 'timer') {
    super();
    this.key = key;
  }

  save(timerData) {
    const dto = DtoMapper.fromTimerModel(timerData);
    localStorage.setItem(this.key, JSON.stringify(dto));
  }

  load() {
    const raw = localStorage.getItem(this.key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return DtoMapper.toTimerModel(new TimerDTO(parsed.duration, parsed.startTime, parsed.isRunning));
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}