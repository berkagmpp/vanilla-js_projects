const container = document.querySelector('.container');
const loremPicsumURL = 'https://picsum.photos/';
const row = 9;

for (let i = 0; i < row; i++) {
  const img = document.createElement('img');
  img.src = `${loremPicsumURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}/${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
