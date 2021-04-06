"use strickt";
//Передача по ссылке или значению
let a = 5,
    b = a;
b = b + 5;    
console.log(b);
console.log(a); 

const obj = {
    a: 5,
    b: 1
};
// const copy = obj;
// /*тут передается уже ссылка на объект
// то есть мы уже меняем сам obj*/
// copy.a = 10;

// console.log(copy);
// console.log(obj);

///////////////////////////Работа с поверхностными копиями
function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers); 
// console.log(numbers);//тут сохранилась ссылка, так что значение меняется 

const add = {
    d: 12,
    e: 45
}

/*Помещаем один объект в другой (target, assign)*/
const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);


///////massive
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adadsjdn';

console.log(oldArray);
console.log(newArray);


///Оператор разворота
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      //добавил в первые два массива свои значения
console.log(internet);      

/////
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 'asd7'];

log(...num);

////
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
