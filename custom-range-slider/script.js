const range = document.getElementById('range');
const label = document.querySelector('label');

// make moving label according to the user input
range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');
  //   console.log(range_width, label_width);
  // -> 300px 60px

  const num_range_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);
  //   console.log(num_range_width, num_label_width);
  // -> 300 60

  const max = e.target.max; //100
  const min = e.target.min; //0

  const left =
    value * (num_range_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);
  //   console.log(left);
  label.style.left = `${left}px`;

  label.innerHTML = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
