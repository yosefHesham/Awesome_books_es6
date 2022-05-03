import { fromJson, toJson } from "./json_handler.js";

export const getBooks = () => fromJson(localStorage.getItem("books"));
export const storeBooks = (books) =>
  localStorage.setItem("books", toJson(books));
