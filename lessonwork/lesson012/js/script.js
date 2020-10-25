
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let lastMovieFilmFirst = prompt('Один из последних просмотренных фильмов 1?');
let lastMovieRatingFirst = prompt('Оцените этот фильм');
let lastMovieFilmSecond = prompt('Один из последних просмотренных фильмов 2?');
let lastMovieRatingSecond = prompt('Оцените этот фильм');
const personalMovieDB = {
    count: +numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastMovieFilmFirst] = +lastMovieRatingFirst;
personalMovieDB.movies[lastMovieFilmSecond] = +lastMovieRatingSecond;

console.log(personalMovieDB);

