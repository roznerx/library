let myLibrary = [];
let newBook = {};

//Constructor

function Book(title, author, genre, year, pages, status) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.year = year;
  this.pages = pages;
  this.status = status;
}

//Display book

theHobbit = new Book("THE HOBBIT", "J.R.R. Tolkien", "Fantasy", "1937", "304", "Not read");
myLibrary.push(theHobbit);
//const displayBookTest = document.getElementById("displaybooktest");
//displayBookTest.id = "listedBook";

//Constants

const addBook = document.getElementById("addbook");
const popup = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");

const bookList = document.getElementById("booklist");
let listedBook = document.getElementsByClassName("listedBook");
let bookListFull = document.getElementById("booklist").children;

const bookGenreImage = document.getElementById("bookgenreimage");
const title = document.getElementById("title");
const authorName = document.getElementById("authorname");
const yearNumber = document.getElementById("yearnumber");
const pagesNumber = document.getElementById("pagesnumber");
const readStatus = document.getElementById("readstatus");

const newTitle = document.getElementById("newtitle");
const newAuthor = document.getElementById("newauthor");
const newGenre = document.getElementById("newgenre");
const newYear = document.getElementById("newyear");
const newPages = document.getElementById("newpages");
const statusRead = document.getElementById("status1");
const statusNotRead = document.getElementById("status2");

const submit = document.getElementById("submit");
const deleteBook = document.getElementById("deletebook");
const changeStatusBtn = document.getElementById("changestatus");


//Popup

addBook.addEventListener("click", () => {
    popup.style.display = "block";
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", event => {
  if(event.target.className === "popup-wrapper") {
      popup.style.display = "none";
  }
});

//Add book(s)

submit.addEventListener("click", () => {

  popup.style.display = "none";

  let newTitleValue = newTitle.value;
  let newAuthorValue = newAuthor.value;
  let newGenreValue = newGenre.value;

  //MAKE CONDITION FOR GENRE PICTURES

  let newYearValue = newYear.value;
  let newPagesValue = newPages.value;
  
  let addStatus = "";
  if (statusRead.checked) {
    addStatus = statusRead.value;
  } else if (statusNotRead.checked) {
    addStatus = statusNotRead.value;
  }

  let ul = document.createElement("ul");
  ul.innerHTML = newTitleValue;
  ul.id = newTitleValue;
  ul.className = "listedBook";
  document.getElementById("booklist").appendChild(ul); 
  newBook = new Book(newTitleValue, newAuthorValue, newGenreValue, newYearValue, newPagesValue, addStatus);
  myLibrary.push(newBook);
});

//EVENT DELEGATION

document.body.addEventListener("click", function(event) {
  if (event.target.className == "listedBook") {
    for (let i = 0; i < myLibrary.length; i++) {
      if (event.target.innerHTML == myLibrary[i].title) {
        //bookGenreImage
        title.innerHTML = myLibrary[i].title;
        authorName.innerHTML = myLibrary[i].author;
        yearNumber.innerHTML = myLibrary[i].year;
        pagesNumber.innerHTML = myLibrary[i].pages;
        readStatus.innerHTML = myLibrary[i].status;
      }
    }
  }
});

//Delete book(s)

deleteBook.addEventListener("click", () => {

  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title == title.innerHTML) {
    for (let j = 0; j < bookListFull.length; j++) {
      if (title.innerHTML == bookListFull[j].innerHTML) {
        listedBook[j].remove();
      }
    }
    myLibrary.splice(i, 1);
    if (myLibrary.length >= 2) {
      //bookGenreImage
      title.innerHTML = myLibrary[i-1].title;
      authorName.innerHTML = myLibrary[i-1].author;
      yearNumber.innerHTML = myLibrary[i-1].year;
      pagesNumber.innerHTML = myLibrary[i-1].pages;
      readStatus.innerHTML = myLibrary[i-1].status;
    } else {
        title.innerHTML = "";
        authorName.innerHTML = "";
        yearNumber.innerHTML = "";
        pagesNumber.innerHTML = "";
        readStatus.innerHTML = "";
      }    
    }
  }
});

//Change status

changeStatusBtn.addEventListener("click", () => {
  
  for (let i = 0; i < myLibrary.length; i++) {

  if (readStatus.innerHTML == myLibrary[i].status) {

    if (myLibrary[i].status == "Read") {
      myLibrary[i].status == "Not read";
    } else if (myLibrary[i].status == "Not read") {
      myLibrary[i].status == "Read";
    }
  }

    

  }

});













