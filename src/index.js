// TODO list:
// get a toggle working for the read status
//   use prototypical inheritance
// get webstorageapi working
// add styling

let myLibrary = [];

// making the book constructor
function Book(title, author, pageNumbers, readStatus) {
  return { title, author, pageNumbers, readStatus };
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

// each container contains a bookDiv (with the content) and a removalButton
const displayBookContainer = (book) => {
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("bookContainer");

  const bookID = myLibrary.indexOf(book);
  const libraryDiv = document.querySelector("#libraryDiv");
  libraryDiv.appendChild(bookContainer);

  // Functions to make content

  const createRemovalButton = (book) => {
    const bookID = myLibrary.indexOf(book);
    // adding a button for removing
    const removalButton = document.createElement("button");
    removalButton.classList.add("removalButton");
    removalButton.setAttribute("id", "removalButton");
    removalButton.setAttribute("data-bookID", `${bookID}`);
    removalButton.textContent = "Remove";

    // removing and entry from the DOM
    removalButton.addEventListener("click", (ev) => {
      myLibrary.splice(bookID, 1);
      // bookContainer.style.visibility = "hidden";
      while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.lastChild);
      }
      libraryDiv.removeChild(bookContainer);
      console.log("removed book", bookID, myLibrary);
    });

    return removalButton;
  };

  // function to hold all the content of a book
  const createBookDiv = (book) => {
    // create a book div
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDiv");

    // for book every attribute, make a node
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
    return bookDiv;
  };

  bookContainer.setAttribute("data-bookID", `${bookID}`);
  bookContainer.appendChild(createRemovalButton(book));
  bookContainer.appendChild(createBookDiv(book));
};

console.log(myLibrary);

// // take input from the HTML form, display in DOM and reset form input
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
  displayBookContainer(newBook);
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", formToBook, false);
