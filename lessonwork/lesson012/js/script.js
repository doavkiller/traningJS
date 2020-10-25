'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastMovieFilm = 
    prompt('Один из последних просмотренных фильмов?', ''),
    lastMovieRating = prompt('Оцените этот фильм', '');
    personalMovieDB.movies[lastMovieFilm] = +lastMovieRating;
}


console.log(personalMovieDB);