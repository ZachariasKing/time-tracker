let timer;

// Function to start a countdown timer of 2 hours
document.getElementById("start-button").onclick = function () {
  if (timer) {
    timer.resume();
  }
  else {
  timer = startTimer(7200, "timer-p", function () {})
};
};
// Function to pause the timer
document.getElementById("pause-button").onclick = function () {
  if (timer) {
    timer.pause();
  }
};

// Function to start a countdown timer
function startTimer(seconds, container, oncomplete) {
  var startTime,
    timer,
    obj,
    ms = seconds * 1000,
    display = document.getElementById(container);
  obj = {};
  obj.resume = function () {
    startTime = new Date().getTime();
    timer = setInterval(obj.step, 250);
  };
  obj.pause = function () {
    ms = obj.step();
    clearInterval(timer);
  };
  obj.step = function () {
    ms = isNaN(ms) || ms < 0 ? 0 : ms;
    var now = Math.max(0, ms - (new Date().getTime() - startTime)),
      h = Math.floor(now / 3600000),
      m = Math.floor((now % 3600000) / 60000),
      s = Math.floor((now % 60000) / 1000);
    h = (h < 10 ? "0" : "") + h;
    m = (m < 10 ? "0" : "") + m;
    s = (s < 10 ? "0" : "") + s;
    display.innerHTML = h + "h:" + m + "m:" + s + "s";
    if (now == 0) {
      clearInterval(timer);
      obj.resume = function () {};
      if (oncomplete) oncomplete();
    }
    return now;
  };
  obj.resume();
  return obj;
}

// Function to add hours to a date object
function addHours(date, hours) {
  const hoursToAdd = hours * 60 * 60 * 1000;
  date.setTime(date.getTime() + hoursToAdd);
  return date;
}
