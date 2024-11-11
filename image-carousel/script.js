const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
  // why moving container instead of image?
  // because we want to move the container to show the next image
  // we can't move the image itself because it will be out of the container
}

// clear the interval and set it again
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx++;

  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  idx--;

  changeImage();
  resetInterval();
});
