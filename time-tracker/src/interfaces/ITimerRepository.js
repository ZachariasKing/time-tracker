/* TimerRepositoryInterface is not to be used directly. It is to be extended by an implementation in order to better assist with cleaner testing. */ 
export default class ITimerRepository {
  save(timerData) {
    throw new Error("Not implemented");
  }

  load() {
    throw new Error("Not implemented");
  }

  clear() {
    throw new Error("Not implemented");
  }
}
