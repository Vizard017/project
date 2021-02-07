let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", '');

const personaMovieDB = {
     count:numberOfFilms,
     movies: {},
     actors: {},
     genres:[],
     privat: false
};



      for (let i =0; i<2; i++){
          const a = prompt("один из последних просмотренных филмов?", " "),
                b = prompt("на сколько оцените его?", " ");

                if (a!=null && b!=null && a !='' && b !='' && a.length<50){
                    personaMovieDB.movies[a] = b;
                    console.log('Done');
                }else{
                     console.log('error');
                     i--;
                }

            
      }

      if (personaMovieDB.count < 10){
           console.log('просмотрено мало фильмоэ');
      } else if( personaMovieDB.count>= 10 && personaMovieDB.count<30 ){
           console.log('вы класный зритель');
      }else if (personaMovieDB.count >=30){
            console.log('вы киноман');
                
           }else{
                console.log('произошла ошибка');
           }
      

console.log(personaMovieDB);      