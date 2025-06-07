//Handles UI Updates for the timer view only
// TODO: Update timer display when the timer to appear in title (tab)
export function updateTimerDisplay(remainingSeconds) {
  if (remainingSeconds === 0) {
    timerFinished();
    return;
  }
  const display = document.getElementById("timer-p");
  const title = document.getElementsByTagName("title")[0];
  const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const secs = String(remainingSeconds % 60).padStart(2, "0");
  display.textContent = `${hrs}:${mins}:${secs}`;
  title.textContent = `${hrs}:${mins}:${secs} left on timer`;
}

export function timerFinished() {
  const audio = document.getElementById("timer-finished-sound");
  audio.play().catch((error) => {
    console.error("Error playing audio:", error);
  });
  changeTimerAndTitleText("00:00:00", "Timer Finished");
}

export function clearTimerDisplay() {
  /* Reset inner text of timer elements back to 0 and show default title */
  changeTimerAndTitleText("00:00:00", "Time Tracker");
  const audio = document.getElementById("timer-cleared-sound");
  audio.play().catch((error) => {
    console.error("Error playing audio:", error);
  });
}

function changeTimerAndTitleText(displayText, titleText) {
  const display = document.getElementById("timer-p");
  const title = document.getElementsByTagName("title")[0];
  display.textContent = displayText;
  title.textContent = titleText;
}
