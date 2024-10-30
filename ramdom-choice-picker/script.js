const tagElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  // use enter key to erase the input and select a random tag
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(',') // split by comma
    .filter((tag) => tag.trim() !== '') // remove empty space
    .map((tag) => tag.trim()); // remove white space

  tagElement.innerHTML = ''; // clear the tag element

  // create tag element
  tags.forEach((tag) => {
    const span = document.createElement('span'); // create span element
    span.classList.add('tag'); // add class tag
    span.innerText = tag; // add text to tag
    tagElement.appendChild(span); // append tag to tag element
  });
}

function randomSelect() {
  const times = 30;
  // interval to highlight and unhighlight the tag (choise)
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    // highlight and unhighlight the tag
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // stop the interval and highlight the selected tag
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// pick random tag
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

// highlight the tag
function highlightTag(tag) {
  tag.classList.add('highlight');
}

// unhighlight the tag
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}
