import {Invoice} from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
// interfaces

interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
};

const me: IsPerson = {
    name: 'Shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent' , amount);
        return amount;
    },
};

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
};

greetPerson(me);

console.log(me);



const invOne = new Invoice('Mario', 'work on website', 25);
const invTwo = new Invoice('Luigi', 'clean street', 65);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});


// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
        ); 
});

