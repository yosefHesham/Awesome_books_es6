import emptyList from "./custom_event.js";
import booksSections from "./booksui.js";
import storage from "./storage.js";
import { toJson, fromJson } from "./json_handler.js";
class Books {
  static books = fromJson(localStorage.getItem("books")) ?? [];

  static addBook = (title, author) => {
    this.books.push({ title, author });
    storage("books", toJson(this.books));
  };

  static removeBook = (title, e) => {
    if (this.books.length === 1) {
      booksSections.dispatchEvent(emptyList);
    }
    this.books = this.books.filter((book) => book.title !== title);
    storage("books", toJson(this.books));
    e.target.parentElement.remove();
  };
}

export default Books;
