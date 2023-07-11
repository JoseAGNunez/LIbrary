const body = document.body;

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

        //Add Book Form
        let addBookForm = document.createElement('form');
        addBookForm.id = 'addBookForm';
        body.appendChild(addBookForm);
        addBookForm.addEventListener('submit',function(event){
            event.preventDefault();
        });

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
        titleInput.required = true;

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
        authorInput.required = true;

        //Pages

        let pagesLabel = document.createElement('label');
        pagesLabel.setAttribute('for', 'pages');
        pagesLabel.textContent = 'Pages';
        addBookForm.appendChild(pagesLabel);

        let pagesInput = document.createElement('input');
        addBookForm.appendChild(pagesInput);
        pagesInput.type = 'number';
        pagesInput.name = 'pages';
        pagesInput.id = 'pages';
        pagesInput.min = 0;
        pagesInput.required = true;

        //Read Status Radio--
        let readDiv = document.createElement('p');
        addBookForm.appendChild(readDiv);
        readDiv.textContent = 'Read:';

        //True--
        let readStatusLabelTrue = document.createElement('label');
        readStatusLabelTrue.htmlFor = 'readStatusTrue';
        readStatusLabelTrue.textContent ='True';
        addBookForm.appendChild(readStatusLabelTrue);

        let readStatusInputTrue = document.createElement('input');
        readStatusInputTrue.type = 'radio';
        readStatusInputTrue.id = 'readStatusTrue';
        readStatusInputTrue.name = 'readStatus';
        readStatusInputTrue.value = 'true';
        addBookForm.appendChild(readStatusInputTrue);
        readStatusInputTrue.required = true;

        //False--
        let readStatusLabelFalse = document.createElement('label');
        readStatusLabelFalse.htmlFor = 'readStatusFalse';
        readStatusLabelFalse.textContent ='False';
        addBookForm.appendChild(readStatusLabelFalse);

        let readStatusInputFalse = document.createElement('input');
        readStatusInputFalse.type = 'radio';
        readStatusInputFalse.id = 'readStatusFalse';
        readStatusInputFalse.name = 'readStatus';
        readStatusInputFalse.value = 'false';
        addBookForm.appendChild(readStatusInputFalse);

        //Submit button
        let submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.form = 'addBookForm';
        submitButton.textContent = 'Submit';
        addBookForm.appendChild(submitButton);

        // create new book object and push to myLibrary array
        submitButton.addEventListener('click', function(){
            let readStatusTrue = document.getElementById('readStatusTrue');
            let readStatusFalse = document.getElementById('readStatusFalse');
            let readStatus;
            if (document.getElementById('title').value === '' ||
            document.getElementById('author').value === '' ||
            document.getElementById('pages').value === '' ||
            !readStatusTrue.checked && !readStatusFalse.checked
            ) {
                //do nothing
            } else {

                if ( readStatusTrue.checked) {
                    readStatus = true;
                } else {
                    readStatus = false;
                }

                let book = new Book(document.getElementById('title').value,
                document.getElementById('author').value,
                document.getElementById('pages').value,
                readStatus);
                myLibrary.push(book);
            }
        })

    });
};

addBook();