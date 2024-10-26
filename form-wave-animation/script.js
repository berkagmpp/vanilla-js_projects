const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split('') // split the text into an array of letters
    .map(
      // map over each letter
      (letter, index) =>
        `<span style="transition-delay:${index * 40}ms">${letter}</span>`
      //   delay the transition of each letter by 40ms
    )
    .join('');
  // join the array of letters back into a string
});
