"use strickt";
//_______________________________
//Function declaration
function showFirstMassage(text) {
    console.log(text);
}
showFirstMassage("hello sooqa");


// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 10));
// console.log(calc(33, 20));
// console.log(calc(55, 12));

function ret() {
    let num = 50;


    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//Function expression
const logger = function() {
    console.log("hello");
};
logger();

//Стрелочная функция
const calc = (a, b) => a + b;
console.log(calc(10, 5));


//Методы и свойства строк и чисел________
const arr = [1, 2, 3, 5];
console.log(arr.length);


const str = "teSt";
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));//с какого индекса начинается



const logg = "Hello anime boy";
// console.log(logg.slice(6, 11));
// console.log(logg.slice(12, 15));
console.log(logg.substr(5, 6));//вырезает из переменной

const num = 12.6;
console.log(Math.round(num));//округление до целого

const lel = "12.2px";
console.log(parseInt(lel));//из строки в число(не прямое назначение)
console.log(parseFloat(lel));//из строки в число с дробными значениями

