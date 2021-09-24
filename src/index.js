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

// function for adding book to mylibrary array
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

        case "readStatus":
          const bookAttrReadStatus = document.createElement("button");
          // console.log(attr);
          // attr == true
          //   ? bookAttrReadStatus.classList.add("bookRead")
          //   : bookAttrReadStatus.classList.add("bookUnread");

          if (attr == true) {
            bookAttrReadStatus.classList.add("bookRead");
            bookAttrReadStatus.textContent = "Read";
          } else if (attr == false) {
            bookAttrReadStatus.classList.add("bookUnread");
            bookAttrReadStatus.textContent = "Unread";
          }
          // bookAttrReadStatus.classList.add("readStatusToggle");

          book.prototype = Object.create(Book.prototype);
          console.log(book.prototype);

          book.readStatusToggle = function () {
            console.log(book.readStatus);
            book.readStatus
              ? (book.readStatus = false)
              : (book.readStatus = true);
            console.log(book.readStatus);
          };

          // book.prototype = Object.create(Book.prototype);
          // // method to toggle readstatus
          // book.prototype.readStatusToggle = function () {
          //   // if the class of staus button is read, change it to unread
          //   console.log(this.readStatus);
          // };

          bookAttrReadStatus.addEventListener("click", book.readStatusToggle);
          bookDiv.appendChild(bookAttrReadStatus);

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

// take input from the HTML form, display in DOM and reset form input
// function formToBook(event) {
//   const formTitle = document.querySelector("#formTitle").value;
//   const formAuthor = document.querySelector("#formAuthor").value;
//   const formPageNumbers = document.querySelector("#formPageNumbers").value;
//   const formReadStatus = document.querySelector("#formReadStatus").checked;
//   const newBook = new Book(
//     formTitle,
//     formAuthor,
//     formPageNumbers,
//     formReadStatus
//   );
//   event.preventDefault();
//   document.querySelector("form").reset();
//   addBookToLibrary(newBook);
//   console.log(myLibrary);
//   displayBookContainer(newBook);
// }

// const submitButton = document.querySelector("#submit");
// submitButton.addEventListener("click", formToBook, false);
// FIXME what does the false do on the line above

const displayLibrary = (lib) => {
  lib.forEach((element) => {
    displayBookContainer(element);
  });
};

// adding test books
myLibrary.push(new Book("Pride and prejudice", "Jane Austen", 553, false));
myLibrary.push(new Book("Jane Eyre", "Charlotte Bronte", 804, true));
myLibrary.push(new Book("Wuthering Heights", "Emily Bronte", 934, false));

console.log(myLibrary);

// displayBookContainer(pp);
// displayBookContainer(je);
// displayBookContainer(wh);

displayLibrary(myLibrary);
