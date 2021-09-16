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
const theBFG = new Book("The B.F.G", "Roald Dahl", 600, false);
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

// function to open form for adding book
function openForm() {
  const formDiv = document.querySelector("#formDiv");
  formDiv.style.display = "block";
}

// testing they are appended to array correctly
addBookToLibrary(aliceInWonderland);
addBookToLibrary(harryPotter);
addBookToLibrary(theBFG);
addBookToLibrary(gameofThrones);
displayLibInDOM();

function displayLibInDOM() {
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

    // access the library div, append book div as a child
    const libraryDiv = document.querySelector("#libraryDiv");
    libraryDiv.appendChild(bookDiv);
  });
}

// take input from the HTML form
function formToBook() {
  const formTitle = document.querySelector("#formTitle").value;
  const formAuthor = document.querySelector("#formAuthor").value;
  const formPageNumbers = document.querySelector("#formPageNumbers").value;
  const formReadStatus = document.querySelector("#formReadStatus").checked;
  const newBook = new Book(
    formTitle,
    formAuthor,
    formPageNumbers,
    formReadStatus
  );
  addBookToLibrary(newBook);
  console.log(myLibrary);
  displayLibInDOM();
  // FIXME probably needs addevent listener rather than submit function
  // element appears then disappears
  // or try decoupling the above function
}
