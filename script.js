let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const lapBtn = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = formatTime(elapsedTime);
  lapsList.innerHTML = '';
  isRunning = false;
}

function lapTime() {
  const lapTime = elapsedTime;
  const lapItem = document.createElement('li');
  lapItem.textContent = formatTime(lapTime);
  lapsList.appendChild(lapItem);
}

function formatTime(time) {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', lapTime);
