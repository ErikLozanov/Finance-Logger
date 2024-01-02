"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = require("./classes/invoice");
const invOne = new invoice_1.Invoice('Mario', 'work on website', 25);
const invTwo = new invoice_1.Invoice('Luigi', 'clean street', 65);
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
