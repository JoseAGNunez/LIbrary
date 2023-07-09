const body = document.body;
const newDiv = document.createElement('div');

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

Book.prototype.readStatus = function() {
    if (this.read === true) {
        this.read = false;
    } else {
        this.read = true;
    }
}

function displayLibrary(){
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

function addBook(){
    let hideLibrary = document.getElementById('myLibraryDiv');
    let addBookButton = document.createElement('button');
    body.appendChild(addBookButton);
    addBookButton.textContent = 'Add Book';
    addBookButton.addEventListener('click', function(){

        hideLibrary.remove();
        addBookButton.remove();

        let addBookForm = document.createElement('form');
        body.appendChild(addBookForm);

        //Title
        let titleLabel = document.createElement('label');
        titleLabel.setAttribute('for','title');
        titleLabel.textContent = 'Title';
        addBookForm.appendChild(titleLabel);
        
        let titleInput = document.createElement('input');
        addBookForm.appendChild(titleInput);
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('name','title');
        titleInput.id = 'title';

        //Author
        let authorLabel = document.createElement('label');
        authorLabel.setAttribute('for','author');
        authorLabel.textContent = 'Author';
        addBookForm.appendChild(authorLabel);

        let authorInput = document.createElement('input');
        addBookForm.appendChild(authorInput);
        authorInput.setAttribute('type','text');
        authorInput.setAttribute('name','author');
        authorInput.id = 'author';

        // pages

        let pagesLabel = document.createElement('label');

    })
}

addBook();