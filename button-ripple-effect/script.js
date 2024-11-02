const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // when use 'this', need to change from arrow function to regular formatting function
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y); -> show location of x and y from view(not from button)

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // offsetTop and offsetLeft are location of button from view

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside); -> show location of x and y inside the button

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);
    // when use 'this', need to change from arrow function to regular formatting function

    setTimeout(() => circle.remove(), 500);
    // circles are added when press the button, so remove the circle in 5 seconds later
    // in vanilar js, need to clear up after done everything
  });
});
