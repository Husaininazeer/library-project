let myLibrary = [];

// making the book constructor
function Book(title, author, pageNumbers, readStatus) {
  this.title = title;
  this.author = author;
  this.pageNumbers = pageNumbers;
  this.readStatus = readStatus;
}

// making a test books
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 200, true);
const gameofThrones = new Book("A Game of thrones", "G. R. Martin", 600, false);
const aliceInWonderland = new Book(
  "Alice's adventures in wonderland",
  "Lewis Caroll",
  240,
  true
);

// adding book to mylibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// testing they are appended to array correctly
addBookToLibrary(aliceInWonderland);
addBookToLibrary(harryPotter);
addBookToLibrary(gameofThrones);

// for every book in the my library array
myLibrary.forEach((book) => {
  // create a book div
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("bookDiv");

  // for every attribute, make a node
  for (const [attrKey, attr] of Object.entries(book)) {
    switch (attrKey) {
      case "title":
        const bookAttrHeader = document.createElement("h3");
        bookAttrHeader.textContent = `${attr}`;
        bookDiv.appendChild(bookAttrHeader);
        break;

      default:
        const bookAttr = document.createElement("p");
        bookAttr.textContent = `${attr}`;
        bookDiv.appendChild(bookAttr);
        break;
    }
  }

  // access the library div
  const libraryDiv = document.querySelector("#libraryDiv");
  libraryDiv.appendChild(bookDiv);
});

// append attribute div as a child
