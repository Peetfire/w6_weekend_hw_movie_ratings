document.addEventListener('DOMContentLoaded', () => {
    const newitemform = document.querySelector('#new-item-form');
    newitemform.addEventListener('submit', handleNewItemFormSubmit);
  
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

    

    return movieListItem;
}