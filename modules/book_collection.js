import { getBooks, storeBooks } from './storage.js';

class Books {
  static books = getBooks() ?? [];

  static addBook = (title, author) => {
    this.books.push({ title, author });
    storeBooks(this.books);
  };

  static removeBook = (title, e) => {
    this.books = this.books.filter((book) => book.title !== title);
    storeBooks(this.books);
    e.target.parentElement.remove();
  };
}

export default Books;
