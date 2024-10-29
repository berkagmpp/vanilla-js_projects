const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
    // parentNode is the parent of the current node
    // classList.toggle() toggles the class of the element
  });
});
