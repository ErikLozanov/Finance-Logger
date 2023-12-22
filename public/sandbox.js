"use strict";
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
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
};
