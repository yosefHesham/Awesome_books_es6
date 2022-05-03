import emptyList from './custom_event.js';
import booksSections from './booksui.js';

class Books {
  static books = JSON.parse(localStorage.getItem('books')) ?? [
    {
      title: 'Testeroo Testyy',
      author: 'Lorem Ipsum',
    },
    { title: 'Second Book', author: 'Testeroo Testyy' },
  ];

  static addBook = (title, author) => {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  static removeBook = (title, e) => {
    if (this.books.length === 1) {
      booksSections.dispatchEvent(emptyList);
    }
    this.books = this.books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(this.books));

    e.target.parentElement.remove();
  };
}

export default Books;
