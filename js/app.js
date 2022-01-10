document.addEventListener('DOMContentLoaded', () => {
    const newitemform = document.querySelector('#new-item-form');
    newitemform.addEventListener('submit', handleNewItemFormSubmit);

    const range = document.querySelector('#score');
    range.addEventListener('change', handleRangeChange);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
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

const handleDeleteAllClick = function (event) {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
  }

const createMovieListItem = function(form) {
    const movieListItem = document.createElement('div');
    if(form.category.value === "movie"){
        movieListItem.classList.add('movie-list-item');

        const movieItemContainer = document.createElement('div');
        movieItemContainer.classList.add('movie-item-container');

        const line1 = createLine1(form);
        const line2 = createLine2(form);
        const scoreBar = createScoreBar(form.score.value);
        movieItemContainer.append(line1);
        movieItemContainer.append(line2);
        movieItemContainer.append(scoreBar);

        movieListItem.append(movieItemContainer);
    } else {
        movieListItem.classList.add('tv-list-item');

        const tvItemContainer = document.createElement('div');
        tvItemContainer.classList.add('tv-item-container');

        const line1 = createLine1(form);
        const line2 = createLine2(form);
        const scoreBar = createScoreBar(form.score.value);
        tvItemContainer.append(line1);
        tvItemContainer.append(line2);
        tvItemContainer.append(scoreBar);

        movieListItem.append(tvItemContainer);
    }

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
const createLine1 = function(form){
    // create line1 container
    const line1 = document.createElement('div');
    line1.classList.add('line1-container');

    // create content for line1
    const title = document.createElement('h4');
    title.textContent = form.title.value;

    // apend content to line1
    line1.append(title);

    return line1;
}
const createLine2 = function(form){
    // create line2 container
    const line2 = document.createElement('div');
    line2.classList.add('line2-container');

    // create content for line 2
    const genre = document.createElement('h4');
    genre.textContent = form.genre.value;
    
    const contains = document.querySelectorAll('#contains');
    const containsValues = getContainsValues(contains);
    const contentWarning = document.createElement('h5');
    contentWarning.textContent = containsValues;
    
    const ratings = document.querySelectorAll('#rating');
    const rating = getAgeRating(ratings);
    const ageRating = document.createElement('h5');
    ageRating.textContent = rating.value;

    // append content to line2
    line2.append(genre);
    line2.append(contentWarning);
    line2.append(ageRating);

    return line2;
}
const createScoreBar = function(score){
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');
    const scoreValue = document.createElement('p');
    scoreValue.textContent = String(score) + "%";
    scoreValue.classList.add('score-text');
    scoreContainer.appendChild(scoreValue);

    
    for(let i=0; i <= 100 ; i++){
        if(i<=score){
            const scoreFill = document.createElement('div');
            scoreFill.classList.add('score-fill');
            scoreContainer.append(scoreFill);
        }
        else{
            const scoreNoFill = document.createElement('div');
            scoreNoFill.classList.add('score-no-fill');
            scoreContainer.append(scoreNoFill);
        }
    }
    return scoreContainer;
}