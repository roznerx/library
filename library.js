let myLibrary;
let newBook = {};

//Class declaration
class Book {
  constructor(title, author, genre, year, pages, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.pages = pages;
    this.status = status;
  }
}

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

const img = document.getElementById("img");

//Local Storage

if (localStorage.length !== 0) {

  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  title.innerHTML = myLibrary[0].title;
  authorName.innerHTML = myLibrary[0].author;
  yearNumber.innerHTML = myLibrary[0].year;
  pagesNumber.innerHTML = myLibrary[0].pages;
  readStatus.innerHTML = myLibrary[0].status; 

  if (myLibrary[0].genre == "Adult") {
    img.src = "genre_img/ADULT.png";
  } else if (myLibrary[0].genre == "Adventure") {
    img.src = "genre_img/ADVENTURE.png";
  } else if (myLibrary[0].genre == "Art") {
    img.src = "genre_img/ART.png";
  } else if (myLibrary[0].genre == "Biography") {
    img.src = "genre_img/BIOGRAPHY.png";
  } else if (myLibrary[0].genre == "Children") {
    img.src = "genre_img/CHILDREN.png";
  } else if (myLibrary[0].genre == "Cooking") {
    img.src = "genre_img/COOKING.png";
  } else if (myLibrary[0].genre == "Fantasy") {
    img.src = "genre_img/FANTASY.png";
  } else if (myLibrary[0].genre == "Health") {
    img.src = "genre_img/HEALTH.png";
  } else if (myLibrary[0].genre == "Historical Fiction") {
    img.src = "genre_img/HISTORICALFICTION.png";
  } else if (myLibrary[0].genre == "Horror") {
    img.src = "genre_img/HORROR.png";
  } else if (myLibrary[0].genre == "Romance") {
    img.src = "genre_img/ROMANCE.png";
  } else if (myLibrary[0].genre == "Science Fiction") {
    img.src = "genre_img/SCIENCEFICTION.png";
  } else if (myLibrary[0].genre == "Self-Help") {
    img.src = "genre_img/SELFHELP.png";
  } else if (myLibrary[0].genre == "Thriller") {
    img.src = "genre_img/THRILLER.png";
  }

  for (let i = 0; i < myLibrary.length; i++) {
    let ul = document.createElement("ul");
    ul.innerHTML = myLibrary[i].title;
    ul.id = myLibrary[i].title;
    ul.className = "listedBook";
    document.getElementById("booklist").appendChild(ul);
  } 

} else if (localStorage.length === 0) {

  myLibrary = [];
  theHobbit = new Book("THE HOBBIT", "J.R.R. Tolkien", "Fantasy", "1937", "304", "Not read");
  let ul = document.createElement("ul");
  ul.innerHTML = theHobbit.title;
  ul.id = theHobbit.title;
  ul.className = "listedBook";
  document.getElementById("booklist").appendChild(ul);
  myLibrary.push(theHobbit);
  title.innerHTML = theHobbit.title;
  authorName.innerHTML = theHobbit.author;
  yearNumber.innerHTML = theHobbit.year;
  pagesNumber.innerHTML = theHobbit.pages;
  readStatus.innerHTML = theHobbit.status;
  img.src = "genre_img/FANTASY.png";
};

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

  let newTitleValue = newTitle.value;
  if (newTitleValue.length > 22) {
    newTitleValue = newTitle.value + "...";
  }

  let newAuthorValue = newAuthor.value;
  if (newAuthorValue.length > 18) {
    newAuthorValue = newAuthor.value + "...";
  }

  let newGenreValue = newGenre.value;
  let newYearValue = newYear.value;
  let newPagesValue = newPages.value;
  let addStatus = "";
  if (statusRead.checked) {
    addStatus = statusRead.value;
  } else if (statusNotRead.checked) {
    addStatus = statusNotRead.value;
  }

  if (newTitleValue == "" || newAuthorValue == "" || newGenreValue == "" || newYearValue == "" || newPagesValue == "" || addStatus == "") {
    alert("You must complete all fields in order to add a new book");
  } else {
    let ul = document.createElement("ul");
    ul.innerHTML = newTitleValue;
    ul.id = newTitleValue;
    ul.className = "listedBook";
    document.getElementById("booklist").appendChild(ul); 
    newBook = new Book(newTitleValue, newAuthorValue, newGenreValue, newYearValue, newPagesValue, addStatus);
    myLibrary.push(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    popup.style.display = "none";
  }  
});

//EVENT DELEGATION

document.body.addEventListener("click", function(event) {

  if (event.target.className == "listedBook") {
    for (let i = 0; i < myLibrary.length; i++) {
      if (event.target.innerHTML == myLibrary[i].title) {
        title.innerHTML = myLibrary[i].title;
        authorName.innerHTML = myLibrary[i].author;
        yearNumber.innerHTML = myLibrary[i].year;
        pagesNumber.innerHTML = myLibrary[i].pages;
        readStatus.innerHTML = myLibrary[i].status;

        if (myLibrary[i].genre == "Adult") {
          img.src = "genre_img/ADULT.png";
        } else if (myLibrary[i].genre == "Adventure") {
          img.src = "genre_img/ADVENTURE.png";
        } else if (myLibrary[i].genre == "Art") {
          img.src = "genre_img/ART.png";
        } else if (myLibrary[i].genre == "Biography") {
          img.src = "genre_img/BIOGRAPHY.png";
        } else if (myLibrary[i].genre == "Children") {
          img.src = "genre_img/CHILDREN.png";
        } else if (myLibrary[i].genre == "Cooking") {
          img.src = "genre_img/COOKING.png";
        } else if (myLibrary[i].genre == "Fantasy") {
          img.src = "genre_img/FANTASY.png";
        } else if (myLibrary[i].genre == "Health") {
          img.src = "genre_img/HEALTH.png";
        } else if (myLibrary[i].genre == "Historical Fiction") {
          img.src = "genre_img/HISTORICALFICTION.png";
        } else if (myLibrary[i].genre == "Horror") {
          img.src = "genre_img/HORROR.png";
        } else if (myLibrary[i].genre == "Romance") {
          img.src = "genre_img/ROMANCE.png";
        } else if (myLibrary[i].genre == "Science Fiction") {
          img.src = "genre_img/SCIENCEFICTION.png";
        } else if (myLibrary[i].genre == "Self-Help") {
          img.src = "genre_img/SELFHELP.png";
        } else if (myLibrary[i].genre == "Thriller") {
          img.src = "genre_img/THRILLER.png";
        }
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
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    if (myLibrary.length >= 2) {
      title.innerHTML = myLibrary[i-1].title;
      authorName.innerHTML = myLibrary[i-1].author;
      yearNumber.innerHTML = myLibrary[i-1].year;
      pagesNumber.innerHTML = myLibrary[i-1].pages;
      readStatus.innerHTML = myLibrary[i-1].status;
      img.src = myLibrary[i-1].genre;
    } else {
        title.innerHTML = "";
        authorName.innerHTML = "";
        yearNumber.innerHTML = "";
        pagesNumber.innerHTML = "";
        readStatus.innerHTML = "";
        img.src = "";
      }    
    }
  }
});

//Change status

changeStatusBtn.addEventListener("click", () => {
  for (let i = 0; i < myLibrary.length; i++) {
    if (readStatus.innerHTML == myLibrary[i].status && myLibrary[i].status == "Read") {
      readStatus.innerHTML = "Not read";
    } else if (readStatus.innerHTML == myLibrary[i].status && myLibrary[i].status == "Not read") {
      readStatus.innerHTML = "Read";
    } 
    myLibrary[i].status = readStatus.innerHTML;
  }
});

// Validations

const titleInput = document.getElementById('newtitle');
const authorInput = document.getElementById('newauthor')
const yearInput = document.getElementById('newyear');
const pagesInput = document.getElementById('newpages');

titleInput.addEventListener('input', () => {
  titleInput.setCustomValidity('');
  titleInput.checkValidity();
});

titleInput.addEventListener('invalid', () => {
  if(titleInput.value === '') {
    titleInput.setCustomValidity(`Enter the book's title`);
  } else {
    titleInput.setCustomValidity('Title should be longer than 4 characters and 26 characters max');
  }
});

authorInput.addEventListener('input', () => {
  authorInput.setCustomValidity('');
  authorInput.checkValidity();
});

authorInput.addEventListener('invalid', () => {
  if(authorInput.value === '') {
    authorInput.setCustomValidity(`Enter the book's author`);
  } else {
    authorInput.setCustomValidity(`Author's name should be longer than 4 characters and 26 characters max`);
  }
});

yearInput.addEventListener('input', () => {
  yearInput.setCustomValidity('');
  yearInput.checkValidity();
});

yearInput.addEventListener('invalid', () => {
  if(yearInput.value === '') {
    yearInput.setCustomValidity(`Enter the book's release year`);
  } else {
    yearInput.setCustomValidity(`Release year should be 4 characters max`);
  }
});

pagesInput.addEventListener('input', () => {
  pagesInput.setCustomValidity('');
  pagesInput.checkValidity();
});

pagesInput.addEventListener('invalid', () => {
  if(yeapagesInputrInput.value === '') {
    pagesInput.setCustomValidity(`Enter the book's number of pages`);
  } else {
    pagesInput.setCustomValidity(`Number of pages should be 10 characters max`);
  }
});