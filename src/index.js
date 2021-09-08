let myLibrary = [];

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

// addBookToLib();

///////////////////////////////////////////////
myLibrary.push(new Book('test1', 'testauth1',123, 'no'));
myLibrary.push(new Book('test2', 'testauth2',456, 'no'));
myLibrary.push(new Book('test3', 'testauth3',789, 'no'));

// console.log(myLibrary);

///////////////////////////////////////////////


// const newBook = document.createTextNode(`${myLibrary[0]['title']}`);

// libDiv.appendChild(newBook);

// select the library div
const libDiv = document.querySelector('div#library');


// for each book in myLibrary array
for (i = 0; i < myLibrary.length; i++){
    // make h4 for title, p for author, num of pages and status
    let newBookDiv = document.createElement('div');
    newBookDiv.className = "book"
    
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = `Name: ${myLibrary[i]['title']}`;
    newBookDiv.appendChild(bookTitle);
    
    let bookAuthor = document.createElement('p'); 
    bookAuthor.textContent = `Author: ${myLibrary[i]['author']}`;
    newBookDiv.appendChild(bookAuthor);
    
    let bookNumPages = document.createElement('p'); 
    bookNumPages.textContent = `Number of Pages: ${myLibrary[i]['numOfPages']}`;
    newBookDiv.appendChild(bookNumPages);
    
    let bookStatus = document.createElement('p'); 
    bookStatus.textContent = `Status: ${myLibrary[i]['status']}`;
    newBookDiv.appendChild(bookStatus);
    
    
    libDiv.appendChild(newBookDiv);
}

