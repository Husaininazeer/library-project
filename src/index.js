let myLibrary = [];

// making the book constructor
function Book(title, author, pageNumbers, readStatus) {
  this.title = title;
  this.author = author;
  this.pageNumbers = pageNumbers;
  this.readStatus = readStatus;
}

// adding book to mylibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// function to open form for adding book
function openForm() {
  const formDiv = document.querySelector("#formDiv");
  formDiv.style.visibility = "visible";
}

function displayLastBookInDOM() {
  // create a book div
  const book = myLibrary[myLibrary.length - 1];
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("bookDiv");
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("bookContainer");

  bookContainer.appendChild(bookDiv);

  // removing and entry from the DOM
  // adding a button for removing
  const removalButton = document.createElement("button");
  removalButton.classList.add("removalButton");
  removalButton.setAttribute("id", "removalButton");
  removalButton.textContent = "Remove";
  bookDiv.appendChild(removalButton);

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
  libraryDiv.appendChild(bookContainer);
}

// take input from the HTML form, display in DOM and reset form input
function formToBook(event) {
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
  event.preventDefault();
  document.querySelector("form").reset();
  addBookToLibrary(newBook);
  console.log(myLibrary);
  displayLastBookInDOM();
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", formToBook, false);
