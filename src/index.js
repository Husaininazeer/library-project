let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

///////////////////////////////////////////////
// ADDING BOOK OBJ TO LIBRARY
///////////////////////////////////////////////

function addBookToLib() {
  // take in user input
  const title = prompt("Enter the title of the book:");
  const author = prompt("Enter the author's name:");
  const pages = prompt("How many pages are there?");
  const status = prompt("Have you completed it?");

  // make a new book object with input
  const newBook = new Book(title, author, pages, status);

  // store book in lib
  myLibrary.push(newBook);
}

///////////////////////////////////////////////
// ADDING TEST BOOK VALUES
///////////////////////////////////////////////
myLibrary.push(
  new Book("The great big book of idiocy", "Idiot Shellmann", 123, "no")
);
myLibrary.push(new Book("test2", "testauth2", 456, "no"));
myLibrary.push(new Book("test3", "testauth3", 789, "no"));

///////////////////////////////////////////////
// DISPLAYING THE BOOKS IN DOM
///////////////////////////////////////////////

// select the library div
const libDiv = document.querySelector("div#library");

for (let i = 0; i < myLibrary.length; i++) {
    // for each book in myLibrary make a newBookDiv
    let newBookDiv = document.createElement("div");
    newBookDiv.className = "book";
    
    for (const [key, value] of Object.entries(myLibrary[i])) {
        //   TODO: Refactor this into a switch statement
        if (key === "title") {
            // add a title h4 tag if key it title
            var bookTitle = document.createElement("h3");
            bookTitle.textContent = `${value}`;
            
            newBookDiv.appendChild(bookTitle);
        } else if (key) {
            // add a p tag for everything else
            var bookPTags = document.createElement("p");
            bookPTags.textContent = `${value}`;
            
            newBookDiv.appendChild(bookPTags);
        }
        
        libDiv.appendChild(newBookDiv);
    }
}

///////////////////////////////////////////////
// OPENING AND CLOSING THE POPUP FORM
///////////////////////////////////////////////

function openForm() {
    document.getElementById("popupform").style.display = "block";
};

function closeForm() {
    document.getElementById("loginPopup").style.display = "none";
    // TODO: Add click anywhere to disappear functionality here
};

///////////////////////////////////////////////
// 
///////////////////////////////////////////////