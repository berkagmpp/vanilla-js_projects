const resetBtn = document.getElementById('reset');
const playBtn = document.getElementById('play');
const timerEl = document.getElementById('timer');
const root = document.querySelector(':root');

// install setup
const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);

// run the run() function every second
const timerInterval = setInterval(run, 1000);

// event listeners
playBtn.addEventListener('click', () => {
  playing = !playing;
  playBtn.classList.toggle('play');
  playBtn.classList.toggle('bg-green-500');
  const playIcon = playBtn.querySelector('i');
  playIcon.classList.toggle('fa-play');
  playIcon.classList.toggle('fa-pause');
});

resetBtn.addEventListener('click', resetAll);

// run the timer
function run() {
  if (playing) {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
      resetAll();
    }

    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty('--degrees', calcDeg());
  }
}

// calculate degrees
function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

// reset the timer
function resetAll() {
  playing = false;
  playBtn.classList.remove('play');
  playBtn.classList.remove('bg-green-500');
  const playIcon = playBtn.querySelector('i');
  playIcon.classList.remove('fa-pause');
  playIcon.classList.add('fa-play');
  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  root.style.setProperty('--degrees', '0deg');
}

// time formatting
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, '0')}:${newSeconds
    .toString()
    .padStart(2, '0')}`;
}
