const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    const regex = /^[0-9]*$/;

    if (!regex.test(+e.key)) {
      codes[idx].value = '';
    } else {
      if (idx === codes.length - 1) {
        codes[idx].focus();
        code.classList.add('valid');
        return;
      } else {
        setTimeout(() => codes[idx + 1].focus(), 10);
      }
    }

    if (e.key === 'Backspace') {
      if (idx === 0) {
        return;
      } else {
        codes[idx - 1].value = '';
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    }
  });
});
