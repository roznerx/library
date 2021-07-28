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

const addBook = document.getElementById("addbook");
const popup = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");

const changeStatusBtn = document.getElementById("changestatus");


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
  ul.id = "listedBook";
  document.getElementById("booklist").appendChild(ul); 

  newBook = new Book(newTitleValue, newAuthorValue, newGenreValue, newYearValue, newPagesValue, addStatus);
  myLibrary.push(newBook);

  


});

//EVENT DELEGATION

document.body.addEventListener("click", function(event) {
  if (event.target.id == "listedBook") {

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

    
  /*
    title = "";
    bookGenreImage = "";
    authorName = "";
    yearNumber = "";
    pagesNumber = "";
    readStatus = "";
  */
  }


});

















