const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

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
}
