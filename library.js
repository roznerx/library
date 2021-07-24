let myLibrary = ["The Hobbit", "The Black Emperor", "Legion"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
}

function displayBooks() {
    myLibrary.forEach(book => console.table(book));
}

displayBooks();

