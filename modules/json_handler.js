const toJson = (books) => {
  return JSON.stringify(books);
};
const fromJson = (books) => {
  return JSON.parse(books);
};

export { toJson, fromJson };
