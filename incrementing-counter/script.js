const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    // need to change to number type, because typeof counter.getAttribute('data-target') is string
    // also can use Number(counter.getAttribute('data-target'))
    // also can use parseInt(counter.getAttribute('data-target'))
    // console.log(typeof target, target);
    const c = +counter.innerText;

    const increment = target / 200;
    // can control speed of number increment

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
