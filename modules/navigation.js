const showList = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const showContact = document.querySelector('.contact');

const booksList = document.querySelector('.books');
const addBookForm = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');

addNew.addEventListener('click', () => {
  addBookForm.style.display = 'flex';
  booksList.style.display = 'none';
  contactSection.style.display = 'none';
});

showList.addEventListener('click', () => {
  addBookForm.style.display = 'none';
  booksList.style.display = 'flex';
  contactSection.style.display = 'none';
});

showContact.addEventListener('click', () => {
  addBookForm.style.display = 'none';
  booksList.style.display = 'none';
  contactSection.style.display = 'flex';
});
