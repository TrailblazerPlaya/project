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

console.log(newNumbers); 
console.log(numbers);//тут сохранилась ссылка, так что значение меняется 

const add = {
    d: 12,
    e: 45
}

/*Помещаем один объект в другой (target, assign)*/
console.log(Object.assign(numbers, add));