"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_js_1 = require("./classes/invoice.js");
;
const me = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
console.log(me);
const invOne = new invoice_js_1.Invoice('Mario', 'work on website', 25);
const invTwo = new invoice_js_1.Invoice('Luigi', 'clean street', 65);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
