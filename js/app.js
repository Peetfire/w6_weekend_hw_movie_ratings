document.addEventListener('DOMContentLoaded', () => {
    const newitemform = document.querySelector('#new-item-form');
    newitemform.addEventListener('submit', handleNewItemFormSubmit);

    const range = document.querySelector('#score');
    range.addEventListener('change', handleRangeChange);
  
    // const deleteAllButton = document.querySelector('#delete-all');
    // deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    console.log(event);
    const movieListItem = createMovieListItem(event.target);
    const movieList = document.querySelector('#movie-list');
    movieList.appendChild(movieListItem);
}

const handleRangeChange = function(){
    const resultParagraph = document.querySelector('#score-lable');
    resultParagraph.textContent = `Score: ${this.value}%`;
}

const createMovieListItem = function(form) {
    const movieListItem = document.createElement('li');
    movieListItem.classList.add('movie-list-item');

    const category = document.createElement('h2');
    category.textContent = form.category.value;
    movieListItem.appendChild(category);

    const title = document.createElement('h3');
    title.textContent = form.title.value;
    movieListItem.appendChild(title);

    const genre = document.createElement('h4');
    genre.textContent = form.genre.value;
    movieListItem.appendChild(genre);

    const ratings = document.querySelectorAll('#rating');
    const rating = getAgeRating(ratings);
    const ageRating = document.createElement('h5');
    ageRating.textContent = rating.value;
    movieListItem.appendChild(ageRating);

    return movieListItem;
}

const getAgeRating = function(ratings){
    for(const rating of ratings){
        if(rating.checked){
            return rating;
        }
    }
}