"use strickt";
/*Динамическая типизация*/
//To string
//1 старый
console.log(typeof(String(null)));

//2 конкатинация (способ офк говно)
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 25 + 'px';


//To number
//1
console.log(typeof(Number('4')));

//2 Унарный плюс
console.log(typeof((+'4')));

//3
console.log(typeof(parseInt("15px", 10)));


//To boolean

/*0, '', null, undefined, NaN; - это все FALSE*/

//1
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;
if (switcher) {
    console.log('Working...');
}

//2
console.log(typeof(Boolean('4')));