const addMovieModel = document.getElementById("add-modal");
// const addMovieModel = document.querySelector('#add-modal');
// const addMovieModel = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieModel = addMovieModel.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieModel.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll("input");

const movies = [];

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
