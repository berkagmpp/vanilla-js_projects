const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// dark and light mode control
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    // e.target.innerHtml = 'Dark mode';
    // e is the event object, e.target is the element that triggered the event
  } else {
    html.classList.add('dark');
    e.target.innerHtml = 'Light mode';
  }
});

// move niddle as real clock
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  // hours % 12 will give us 0-11
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock, // num (0-11)
    0, // in_min
    11, // in_max (12 hours)
    0, // out_min (0 degrees)
    360 // out_max (360 degrees)
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes, // num (0-59)
    0, // in_min
    59, // in_max (60 minutes)
    0,
    360
  )}deg)`;

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds, // num (0-59)
    0, // in_min
    59, // in_max (60 seconds)
    0,
    360
  )}deg)`;

  // number clock
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  // minutes display as 00:00 when minutes < 10 instead of 0:00

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// scale function to convert the time to degrees
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
