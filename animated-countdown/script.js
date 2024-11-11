const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnination();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
    // why use classList.value instead of classList.remove?
    // because classList.value will remove all classes from the element
    // classList.remove will remove only the class that we want to remove
  });

  nums[0].classList.add('in');
}

function runAnination() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnination();
});
