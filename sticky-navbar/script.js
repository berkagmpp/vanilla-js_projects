const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    // window.scrollY is the location of the scroll from the top of the page
    // nav.offsetHeight is the height of the nav bar
    // if the scroll is more than the height of the nav bar + 150px
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
