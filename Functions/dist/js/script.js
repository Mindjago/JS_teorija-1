// Funkcijos 
// tai yra kodo blokas, kuris vykdo tam tikra uzduoti, ir kuri galima iskviesti kada norime
function multiply(a,b){
    console.log(a*b);
}

multiply(11,2);

function greeting(){
    console.log("Hello, "+firstName);
}

let firstName = "Mindaugas";


function createHeadingV2() {
    let a;
    let b;
    a=parseint(window.prompt("iveskite heading dydi"));
    b=window.prompt("iveskite pavadinimo teksta");

    document.write("<h"+a+">"+b+"</h"+a+">");
}

// Massyvai - Arrays

const trees = ["Pusis", "Berzas", "Azuolas"];

const cars = [];
cars [0] = "BMW";
cars[1] = "opel";
cars[2] = "audi";

console.log(trees);
console.log(cars);

cars[3] = "Skoda";

let bestcars = cars[3];
console.log(bestcars);

console.log(typeof cars);

// Objektai - Objects

const student = {
    firstname:"Jonas",
    lastname:"Jonaitis",
    age:23
}
console.log(student.lastname);

// Array Methods

const furniture = ["stalas", "kede", "fotelis", "lova"];

console.log(furniture);
// Vercia i teksta
console.log(furniture.toString());
// Join sujungia idedant jungiamaji elementa
console.log(furniture.join(", "));
// pop ir push
// console.log(furniture.pop())
console.log(furniture.push("Spinta"))
// Shift
console.log(furniture.unshift("spintele"))

console.log(furniture.length) //paskutinis indeksas yra 1 mazesnis
// 
// let list = furniture.toString();
// console.log(list);
// 
// console.log();
