//Handles UI Updates for the timer view only
export function updateTimerDisplay(remainingSeconds) {
  const display = document.getElementById('timer-p');
  const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(remainingSeconds % 60).padStart(2, '0');
  display.textContent = `${hrs}:${mins}:${secs}`;
}