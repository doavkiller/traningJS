'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null ||
     isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovieFilm = 
        prompt('Один из последних просмотренных фильмов?', ''),
        lastMovieRating = prompt('Оцените этот фильм', '');
        
        if (lastMovieFilm != null  && lastMovieRating != 
            null && lastMovieFilm != "" && 
            lastMovieRating != "" && lastMovieFilm.length < 50) {
                personalMovieDB.movies[lastMovieFilm] = +lastMovieRating;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (numberOfFilms != null && numberOfFilms != "" && numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов', '');
       } else if(numberOfFilms != null && numberOfFilms != "" && 
       numberOfFilms >= 10 &&  numberOfFilms < 30) {
           alert('Вы класический зритель', '');
       } else if(numberOfFilms != null && numberOfFilms != "" && numberOfFilms >= 30) {
           alert('Вы киноман', '');
       }
       else {
           alert('ошибка');
       }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}` , ''));
    }
}

writeYourGenres();

showMyDB();
