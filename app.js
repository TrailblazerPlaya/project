"use strickt";

/*Практика ч.1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;  
console.log(personalMovieDB);*/   


//Условия
const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Ahuet');
} else {
    console.log('Ok!');
}

//Тернарный оператор, в его работе учавствуют 3 аргумента.
(num === 50) ? console.log('Ok!') : console.log('Error');


//Switch
switch (num) {
    case 49:
        console.log('Newerno');
        break;
        //Break cтавить всегда, иначе после положительной проверки код будет обрабатывать другие кейсы.
    case 100:
        console.log('Newerno');
        break;
    case 50:
        console.log('Verno');
        break;
    default://Для случая, если ни одно из условий не выполнится, устанавливать так же всегда.
        console.log('No way');
        break;        
}
