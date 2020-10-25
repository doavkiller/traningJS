'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 3; i++) {
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

let i = 1;
// while (i < 3) {
//     const lastMovieFilm = 
//     prompt('Один из последних просмотренных фильмов?', ''),
//     lastMovieRating = prompt('Оцените этот фильм', '');
//     if (lastMovieFilm != null  && lastMovieRating != 
//         null && lastMovieFilm != "" && 
//         lastMovieRating != "" && lastMovieFilm.length < 50) {
//             personalMovieDB.movies[lastMovieFilm] = +lastMovieRating;
//             i++;
//     } 
// }

// do {
//     const lastMovieFilm = 
//     prompt('Один из последних просмотренных фильмов?', ''),
//     lastMovieRating = prompt('Оцените этот фильм', '');
//     if (lastMovieFilm != null  && lastMovieRating != 
//         null && lastMovieFilm != "" && 
//         lastMovieRating != "" && lastMovieFilm.length < 50) {
//             personalMovieDB.movies[lastMovieFilm] = +lastMovieRating;
//             i++;
//     } 
// } while (i < 3);


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
console.log(personalMovieDB);
