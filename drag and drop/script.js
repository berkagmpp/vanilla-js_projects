const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// dragstart, dragend started from fill (just one element)
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// dragover, dragenter, dragleave, drop have many places to add event listener
// so need to use loop
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  //   console.log('start');
  this.className += ' hold';
  // ' hold' is added to 'fill' class(space must needed before hold)
  setTimeout(() => (this.className = 'invisible'), 0);
  // setTimeout() is needed to make invisible after dragStart
  // if not, invisible is done before dragStart
}

function dragEnd() {
  //   console.log('end');
  this.className = 'fill';
}

function dragOver(e) {
  //   console.log('over');
  e.preventDefault();
  // dragover() and dragenter() have default action that reset the current drag operation to 'none'
  // so need 'preventDefault()'
}

function dragEnter(e) {
  //   console.log('enter');
  e.preventDefault();
  // dragover() and dragenter() have default action that reset the current drag operation to 'none'
  // so need 'preventDefault()'
  this.className += ' hovered';
  // when enter the square, className ' hovered' are accumulated (space must needed before hovered)
}

function dragLeave() {
  //   console.log('leave');
  this.className = 'empty';
  // when leave, className ' hovered' convert to just one 'empty' (space must needed before empty)
}

function dragDrop() {
  //   console.log('drop');
  this.className = 'empty';
  this.append(fill);
  // append(fill) means: fill is parent, this(empty) is child
}
