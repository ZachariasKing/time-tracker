let timer;

// Function to start a countdown timer of 2 hours
document.getElementById("timer-circle").onclick = function () {
  //If the timer is already running, pause it; if it exists but is paused then resume, else start a new timer
  if (timer) {
    if (timer.isPaused) {
      timer.resume();
    } else {
      timer.pause();
    }
  } else {
    timer = startTimer(7200, "timer-p", function () {});
  }
};

//Function to clear the timer when the clear button is clicked
document.getElementById("timer-clear").onclick = function () {
  clearCurrentTimer();
};

// Function to start a countdown timer
function startTimer(seconds, container, oncomplete) {
  var startTime,
    timer,
    obj,
    ms = seconds * 1000,
    display = document.getElementById(container);
  obj = {};
  obj.isPaused = false;
  obj.resume = function () {
    startTime = new Date().getTime();
    timer = setInterval(obj.step, 250);
  };
  obj.pause = function () {
    isPaused = true;
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

// Function to clear the current timer
function clearCurrentTimer() {
  if (timer) {
    timer = null;
    document.getElementById("timer-p").innerHTML = "00h:00m:00s";
  }
};

