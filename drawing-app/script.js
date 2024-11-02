const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');
// enable drawing in 2D by accessing a canvas element in HTML

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
  // offsetX and offsetY are location of x and y from canvas
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  // arc() method creates an arc/curve (used to create circles, or parts of circles)
  // x and y are location of circle, size is radius of circle, 0 is starting angle, Math.PI * 2 is ending angle(360 degree)
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath(); // start drawing
  ctx.moveTo(x1, y1); // starting point
  ctx.lineTo(x2, y2); // ending point
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2; // line width is double size of circle size
  // because circle size is radius, so line width is diameter
  ctx.stroke();
  // stroke() method actually draws the path you have defined with all those moveTo() and lineTo() methods
}

function updateSizeOnScreen() {
  sizeEl.innerHTML = size;
}

increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // clearRect() method clears the specified pixels within a given rectangle
  // 0, 0 is starting point of x and y, canvas.width and canvas.height are ending point of x and y
});
