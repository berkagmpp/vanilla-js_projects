const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
    // if clicked cup is already full and next cup is not full
  ) {
    idx--;
    //  if clicked cup is 3, then idx will be 2
  }

  smallCups.forEach((cup, i) => {
    if (i <= idx) {
      //  if clicked cup is 3, then all cups from 0 to 3 should be filled
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    // 330px is the height of the big cup
  }
  percentage.innerText = `${(fullCups / totalCups) * 100}%`;

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
    // 250ml is the capacity of each small cup
    // 2L is the total capacity of the big cup
  }
}
