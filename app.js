"use strickt";

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