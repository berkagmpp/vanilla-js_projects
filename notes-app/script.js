const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));
// JSON.parse() -> convert string to array or object
// get notes from local storage which is stored setItem in function upDateLS()

if (notes) {
  notes.forEach((note) => addNewNote(note));
  // pass each note to addNewNote function as parameter
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
        <div class="tools">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
  
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class ="${text ? 'hidden' : ''}"></textarea>
  `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  textArea.value = text;
  main.innerHTML = marked.parse(text); // marked.parse() from cdnjs -> makes can use markdown

  deleteBtn.addEventListener('click', () => {
    note.remove();
    upDateLS(); // update local storage after delete note
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
    // edit doesn't need to update local storage -> already handled in textarea input
  });

  // display textarea input
  textArea.addEventListener('input', (e) => {
    const { value } = e.target; // e.target means textarea itself -> get value from textarea
    main.innerHTML = marked.parse(value); // display markdown text

    upDateLS(); // update local storage every input
  });

  document.body.appendChild(note);
}

// **** local storage basic****
// localStorage.setItem('name', 'john');
// -> set item in local storage
// localStorage.getItem('name');
// -> can check key and value at Application > Storage > Local Storage in console
// localStorage.removeItem('name');

function upDateLS() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem('notes', JSON.stringify(notes));
  // text in notes are stored in local storage -> remian even reload
  // this will store in local storage and will call getItems in the beginning
}
