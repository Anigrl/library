console.log("connected")

// grabbing button
const addBookBtn = document.querySelector(".addBook")//show-dialog button also

// dialog

const dialog = document.querySelector("#dialog");
const closeDialog = document.querySelector('#closeDialog');

// adding eventlistner to dialog buttons

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
    bookTitle.value = '';
    authorName.value = '';
    pages.value = '';
    read.value = '';
});

// submit and closedialog button 
closeDialog.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    dialog.close();
    

})
 

// seting varible for library and grabing them
let bookName, author, pagesCount, readYet;


const bookTitle = document.querySelector("#bookName");
const authorName = document.querySelector("#authorName");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
 

let myLibrary = [];
let noOfBooks = 0;
 


function addBookToLibrary() {
    // catching input items value
        bookName = bookTitle.value,
        author = authorName.value,
        pagesCount = pages.value,
        readYet = read.value;

        console.log(`book ${bookName} by ${author} is ${pagesCount} pages long`)
        // 
        
        // putting books into mylibrary array
        // books are in form of object(key value pair)
    
    myLibrary[noOfBooks] =
    {
        titleOfBook: bookName,
        authorOfBook: author,
        pagesOfBook: pagesCount,
        readOrNot: readYet
    }
    console.log(myLibrary[noOfBooks])
     
    makeBookPlace()
    noOfBooks++;
    
}

const first = document.querySelectorAll(".first")

function makeBookPlace(){
    // catching  place for showing book details
    const firstbooktitle = first[noOfBooks].getElementsByTagName("h2");
    const bookname = first[noOfBooks].querySelector('.dataCatch[data-book-name="title"]');
    const bookauthor = first[noOfBooks].querySelector('.dataCatch[data-author-name="author"]');
    
    // showing into window
    firstbooktitle[noOfBooks].textContent= myLibrary[noOfBooks].titleOfBook ;
    bookname.textContent = myLibrary[noOfBooks].titleOfBook;
    bookauthor.textContent= myLibrary[noOfBooks].authorOfBook;
    
}
 

 