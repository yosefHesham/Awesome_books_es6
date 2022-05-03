import Books from './modules/book_collection.js';
import emptyList from './modules/custom_event.js';
import booksSections from './modules/booksui.js';
import { getBooks, storeBooks } from './modules/storage.js';

const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-button');
const renderBooks = () => {
  if (Books.books.length === 0) {
    booksSections.innerHTML = '<p>You dont have books yet, add some !</p>';
    return;
  }
  booksSections.innerHTML = '';
  for (let i = 0; i < Books.books.length; i += 1) {
    const currentBook = Books.books[i];
    const bookTemplate = document.createElement('bookTemp');
    bookTemplate.innerHTML = `<div class="items-container ${
      i % 2 === 0 ? 'white' : 'gray'
    }">
      <h2>${currentBook.title} by <span> ${currentBook.author} </span></h2>
      <div type="button" class="btn ${currentBook.title}"}">Remove</div>
       </div>`;

    booksSections.appendChild(bookTemplate.firstChild);
  }
};

const fetchAndRenderBooks = () => {
  if (!getBooks()) {
    storeBooks(Books.books);
  }
  renderBooks();
};
window.onload = fetchAndRenderBooks();
const removeBook = (bookTitle, event) => {
  Books.removeBook(bookTitle, event);
  if (Books.books.length === 0) {
    booksSections.dispatchEvent(emptyList);
  }
};
const setRemoveButtonListnters = () => {
  const removeButton = document.querySelectorAll('.btn');
  removeButton.forEach((e) => e.addEventListener('click', (event) => removeBook(e.classList[1], event)));
};
setRemoveButtonListnters();

const addBook = (title, author) => {
  Books.addBook(title, author);
  if (Books.books.length === 1) {
    booksSections.dispatchEvent(emptyList);
  }
  const removeButton = document.createElement('div');
  removeButton.innerHTML = `<div type="button" class="btn ${title}">Remove</div>`;
  removeButton.firstChild.addEventListener('click', (event) => removeBook(title, event));
  const bookTemplate = document.createElement('bookTemp');
  bookTemplate.innerHTML = `<div class="items-container ${
    Books.books.length % 2 === 0 ? 'gray' : 'white'
  }">
  <h2>${title} by <span> ${author} </span></h2>
  </div>`;
  bookTemplate.firstChild.appendChild(removeButton.firstChild);
  booksSections.appendChild(bookTemplate.firstChild);
};

submitButton.addEventListener('click', () => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  if (!title || !author) {
    return;
  }
  form.elements.title.value = '';
  form.elements.author.value = '';
  addBook(title, author);
});
booksSections.addEventListener('emptyList', () => {
  if (Books.books.length === 0) {
    booksSections.innerHTML = '<p>You dont have books yet, add some !</p>';
  } else {
    booksSections.firstChild.remove();
  }
});

export default booksSections;
