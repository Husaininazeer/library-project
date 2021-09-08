let myLibrary = [];
console.log("my library before:", myLibrary)

function Book(title, author, numOfPages, status){
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.status = status;
}

function addBookToLib(){
    // take in user input
    
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author's name:");
    const numOfPages = prompt("How many pages are there?");
    const status = prompt("Have you completed it?");

    // make a new book object with input
    const newBook = new Book(title, author, numOfPages, status);

    // store book in lib
    myLibrary.push(newBook);
}

addBookToLib();
// test it works:
console.log("my library after:", myLibrary)