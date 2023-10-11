const addMovieModel = document.getElementById("add-modal");
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieModel = addMovieModel.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieModel.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll("input");
const entryTextSection = document.getElementById('entry-text');


const movies = [];

const updateUI = () => {
  if(movies.length === 0){
    entryTextSection.style.display = 'block';
  }else{
    entryTextSection.style.display = 'none';
  }
};
const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};


const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  //function () {}
  addMovieModel.classList.toggle("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const AddMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim === "" ||
    imageUrlValue.trim === "" ||
    ratingValue.trim === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please Enter Valid Values (Rating between 1 and 5)");
    return;
  }
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieModel.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", AddMovieHandler);
// userInputs.addEventListener('click', AddMovieHandler);
