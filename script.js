let myLibrary = [
    {title: "Harry Potter", author: "Terf", pages: 0, read: false}, {title: "1984", author: "George Orwell", pages: 0, read: true}
];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, read: ${read}`;
    }
};

function displayLibrary(){
    const body = document.body;
    let myLibraryDiv = document.createElement('div');
    myLibraryDiv.id = 'myLibraryDiv';
    body.appendChild(myLibraryDiv);
    myLibrary.forEach((book, index) => {
        let bookDiv = document.createElement('div');
        bookDiv.id = 'book' + (index);
        myLibraryDiv.appendChild(bookDiv);
        for (let key in book){
            let bookInfoDiv = document.createElement('div');
            bookDiv.appendChild(bookInfoDiv);
            bookInfoDiv.textContent = `${key}: ${book[key]}`;
        }
    })
};

displayLibrary();