const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'You can control the speed down there!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;

  if (e.target.value > 5) {
    e.target.value = 5;
  } else if (e.target.value < 1) {
    e.target.value = 1;
  }
});
