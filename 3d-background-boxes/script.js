const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('magic');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      // each box located with 125px distance when boxes class without big

      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
