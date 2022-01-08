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

    const contains = document.querySelectorAll('#contains');
    const containsValues = getContainsValues(contains);
    const contentWarning = document.createElement('h5');
    contentWarning.textContent = containsValues;
    movieListItem.appendChild(contentWarning);

    const score = document.createElement('p');
    const scoreBar = createScoreBar(form.score.value);
    score.textContent = form.score.value;
    movieListItem.appendChild(scoreBar);

    return movieListItem;
}

const getAgeRating = function(ratings){
    for(const rating of ratings){
        if(rating.checked){
            return rating;
        }
    }
}
const getContainsValues = function(contains){
    let values = "";
    for(const contain of contains){
        if(contain.checked){
            values += contain.value + " ";
        }
    }
    return values;
}
const createScoreBar = function(score){
    const scoreWrapper = document.createElement('div');
    scoreWrapper.classList.add('score-wrapper');
    const scoreValue = document.createElement('p');
    scoreValue.textContent = String(score) + "%";
    scoreValue.classList.add('score-text');
    scoreWrapper.appendChild(scoreValue);

    
    for(let i=0; i <= 100 ; i++){
        if(i<=score){
            const scoreFill = document.createElement('div');
            scoreFill.classList.add('score-fill');
            scoreWrapper.append(scoreFill);
        }
        else{
            const scoreNoFill = document.createElement('div');
            scoreNoFill.classList.add('score-no-fill');
            scoreWrapper.append(scoreNoFill);
        }
    }
    return scoreWrapper;
}