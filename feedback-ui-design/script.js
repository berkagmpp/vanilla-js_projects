const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Saticefied';

// in this script, add event to container instead of adding each icon(button)
// -> this method makes can control a lot of buttons without each eventHandler

ratingsContainer.addEventListener('click', (e) => {
  //   console.log(e.target);

  // e.target.classList.contains('rating') -> img -> cannot clicked exectly
  // e.target.parentNode -> designate 'rating' class
  if (e.target.parentNode.classList.contains('rating')) {
    // console.log(e.target);

    removeActive();

    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
    // img and small is sibling
  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
    <i class="fa fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our custromer support</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
