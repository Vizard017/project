let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');

const personaMovieDB = {
     count:numberOfFilms,
     movies: {},
     actors: {},
     genres:[],
     privat: false
};

const a = prompt("один из последних просмотренных филмов?", " "),
      b = prompt("на сколько оцените его?", " "),
      c = prompt("один из последних просмотренных филмов?", " "),
      d = prompt("на сколько оцените его?"," ");

      personaMovieDB.movies[a] = b;
      personaMovieDB.movies[c] = d;

console.log(personaMovieDB);      