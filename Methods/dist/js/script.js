console.log("test");

// number and methods

let a = 5;
let b = 5.2569;
let c = 56e6; // 56000000

let f = b.toString();
console.log(typeof f);

//  suapvalinimas

b = b.toFixed(1);
console.log(b);

//  String to number

b = Number(b);
console.log(b);
// b = parseInt(b);
// console.log(b);
b = parseFloat(b);
console.log(b);


// String methods

let word = "Ketvirtadienis";

console.log(word.length);

// Teksto karpymas

let cars = "volvo, mazda, skoda";
let car = cars.slice(7,12);
console.log(car);

// substring() - tas pats kaip slice, tik be neigaimu reiksmiu

// Replace - pakeisti elementa

let newcars = cars.replace("volvo","Bmw");
console.log(newcars);

// Join string

let newWord = word.concat (" ",cars);
console.log(newWord);

