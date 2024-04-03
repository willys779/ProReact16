/* 1. FUNCTIONS */
const myFunc1 = (name, weather) => {
    console.log(`Hello ${name}.`);
    console.log(`It is ${weather} today.`);
};
myFunc1("Adam", "sunny");
const myFunc2 = (name, weather = "raining") => {
    console.log(`Hello ${name}.`);
    console.log(`It is ${weather} today.`);
};
myFunc2("Adam");
// usando rest parameters
const myFunc3 = (name, weather, ...extraArgs) => {
    console.log(`Hello ${name}.`);
    console.log(`It is ${weather} today.`);
    for (let i = 0; i < extraArgs.length; i++) {
        console.log(`Extra Arg: ${extraArgs[i]}`);
    }
};
myFunc3("Adam", "sunny", "one", "two", "three");
// retornando valores
const myFunc4 = (name) => {
    return (`Hello ${name}.`);
};
console.log(myFunc4("Adam"));
// usando funciones como argumentos
const myFunc5_1 = (nameFunction) => { 
    return (`Hello ${nameFunction()}.`);
};
const myFunc5_2 = (nameFunction, printFunction) => {
    printFunction(myFunc5_1(nameFunction));
};
myFunc5_2(() => "Adam", console.log);


/* 2. VARIABLES AND TYPES */
// Usar let para variables locales
// Usar const para constantes que no cambian de valor

// Type Boolean
let firstBool = true;
let secondBool = false;

// Type String
let firstString = "This is a string";
let secondString = 'And so is this';

// Type Number
let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xFFFF;

// Equality Operator vs. the Identity Operator
// == != solo compara valores
// === !=== compara valores, tipos y referencias

// Converting Numbers to Strings
let converting1 = (5).toString() + String(5);
// Converting Strings to Numbers
let firstVal = "5";
let secondVal = "5";
let converting2 = Number(firstVal) + Number(secondVal);


/* 3. ARRAYS */
let myArray1 = [100, "Adam", true];
myArray1.forEach((value, index) => console.log(`Index ${index}: ${value}`));
// spread operator
const printItems = (numValue, stringValue, boolValue) => {
    console.log(`Number: ${numValue}`);
    console.log(`String: ${stringValue}`);
    console.log(`Boolean: ${boolValue}`);
};
printItems(...myArray1);
// Concatenar arrays
let myArray2 = [200, "Bob", false, ...myArray1];
// usando funciones de arrays
let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
const totalValue = products.filter(p => p.stock > 0)
                           .reduce((previous, current) => previous + (current.price * current.stock), 0);
console.log(`Total value: $${totalValue.toFixed(2)}`);

/* 4. OBJETOS */
let myData = {
    name: "Adam",
    weather: "sunny",
    printMessages: () => {
        console.log(`Hello ${myData.name}.`);
        console.log(`Today is ${myData.weather}`);
    }
};
myData.printMessages();


/* 5. CLASES */
class MyData {
    constructor() {
        this.name = "Adam";
        this.weather = "sunny";
    }
    printMessages = () => {
        console.log(`Hello ${this.name}.`);
        console.log(`Today is ${this.weather}`);       
    }
}
let myData2 = new MyData();
myData2.printMessages();

// Copiar propiedades de un objeto a otro
// Las copias solo son para tipos primitivos, si son objetos, arrays, funciones, etc
// solo se copia la referencia del objeto origen, para esos casos se recomienda
// una copia profunda con otras librerías.
let myData2Copy = {};
Object.assign(myData2Copy,myData2);
myData2Copy.name = "Willy";
console.log(`Hello ${myData2Copy.name}.`);
console.log(`Today is ${myData2Copy.weather}`);

// Copiar propiedades usando destructuring
// Técnica: Copiar todas las propiedades con desestructuración y luego redefinir las propiedades de ser necesario.
let myData2Copy2 = {...myData2, weather: "cloudy"};
console.log(`Hello ${myData2Copy2.name}.`);
console.log(`Today is ${myData2Copy2.weather}`);

// Capturar nombres de parámetros de objetos
const myData3 = {
    name: "Bob",
    location: {
        city: "Paris",
        country: "France"
    },
    employment: {
        title: "Manager",
        dept: "Sales"
    }
}
const printDetails = ({name, location:{city}, employment:{title}}) => {
    console.log(`Name: ${name}, City: ${city}, Role: ${title}`);
}
printDetails(myData3);


/* 6. MODULES */
// Importando de default module
// import additionFunction from "./sum";
// let values = [10, 20, 30, 40, 50];
// let total = additionFunction(values);
// console.log(total);

// Importando un default y una funcion normal desde un modulo
import oddOnly, {sumValues} from "./sum";
let values = [10, 20, 30, 40, 50];
let total = sumValues(values);
let odds = oddOnly(values);
console.log(`Total: ${total}, Odd Total: ${odds}`);

// Importando multiples funciones
import { multiply, subtract } from "./operations";
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);

// Alias a los nombres de la funciones importadas
// import { multiply, subtract as deduct } from "./operations";

// Importando todo el módulo
// import * as ops from "./operations";
// console.log(`Multiply: ${ops.multiply(values)}`);
// console.log(`Subtract: ${ops.subtract(1000, values)}`);


/* 7. PROMISES */
import {asyncAdd} from "./async";
let values2 = [10, 20, 30, 40, 50];
asyncAdd(values2).then(
    (total2) => console.log(`Main Total: ${total2}`)
);
// Usando async and await
const doTask = async () => {
    let total = await asyncAdd(values);
    console.log(`Main Total: ${total}`);
}
doTask();


