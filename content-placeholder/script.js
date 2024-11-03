const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const authorName = document.getElementById('authorName');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);
// this api is not real, so it will take 2 seconds to load the data

function getData() {
  header.innerHTML = `<img src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquid.`;
  profile_img.innerHTML = `<img src="https://images.pexels.com/photos/7447359/pexels-photo-7447359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />`;
  authorName.innerHTML = `John Doe`;
  date.innerHTML = `11 Nov, 2024`;

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));

  animated_bg_texts.forEach((bg_text) =>
    bg_text.classList.remove('animated_bg_text')
  );
}
