'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovieFilmFirst =
    prompt('Один из последних просмотренных фильмов 1?', ''),
    lastMovieRatingFirst = prompt('Оцените этот фильм', ''),
    lastMovieFilmSecond =
    prompt('Один из последних просмотренных фильмов 2?', ''),
    lastMovieRatingSecond = prompt('Оцените этот фильм', '');

personalMovieDB.movies[lastMovieFilmFirst] = +lastMovieRatingFirst;
personalMovieDB.movies[lastMovieFilmSecond] = +lastMovieRatingSecond;

console.log(personalMovieDB);