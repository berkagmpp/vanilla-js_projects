const tagELement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input
    .split(',') // split by comma
    .filter((tag) => tag.trim() !== '') // remove empty space
    .map((tag) => tag.trim()); // remove white space

  tagELement.innerHTML = ''; // clear the tag element

  tags.forEach((tag) => {
    const span = document.createElement('span'); // create span element
    span.classList.add('tag'); // add class tag
    span.innerText = tag; // add text to tag
    tagELement.appendChild(span); // append tag to tag element
  });
}
