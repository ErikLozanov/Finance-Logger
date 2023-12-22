// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum};

// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// };

// const greet = (user: {name: string, uid: StringOrNum}) => {
//     console.log(`${user.name} says hello`);
// };

// const greetAgain = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// };

// greet({name: 'Hero', uid: 'hi'})

// let greet: Function;


// FUNCTION SIGNATURES

// example 1
let greet: (a: string, b:string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};


// example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}


// example 3

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};