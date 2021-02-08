"use strict";

//strings

// let str1 = "this is a text";
// let str2 = "this is also a text";
// let str3 = `this is also a text`;

// one type of string can contain the other kind
let name1 = "Brian O'Conner";
let name2 = 'Dominic "Dom" Toretto';
// or escape them using \ if you wish to use the same kind inside = \"Dom"
let team = 'O\'Conner and "Dom"';

//Temperate literals
const name = "peter";
const drink = "pepsi";
console.log(`Hello ${name}, would you like a ${drink}?`);

// length and [index]
const len = name.length;
console.log(`${name} is ${len} characters long`);

const letter = name[0];
console.log(`The first letter of ${name} is ${letter}`);

const longname = "Albus Percival Wulfric Brian Dumbledore";
const total = longname.length;
console.log(`total number of characters is: ${total}`);
const index2 = longname[2];
console.log(`character at index 2 is: ${index2}`);
const index6 = longname[6];
console.log(`character at index 6 is: ${index6}`);

//methods
// cosnt str1 = "There is space here";
// cosnt str2 = str1.trim();
// console.log(str2);

// method parameters
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 6);
const lastName = fullName.substring(17);

console.log(`firstname is: _${firstName}_`);
console.log(`lastname is: _${lastName}_`);

//exercises with substring
const albus = longname.substring(0, 5);
const dumbledore = longname.substring(29);
const wulfrick = longname.substring(15, 22);
const wulfrickSpace = longname.substring(14, 23);
const ian = longname.substring(25, 28);
const bus = longname.substring(2, 5);

console.log(`Albus is: _${albus}_`);
console.log(`dumbledore is: _${dumbledore}_`);
console.log(`wulfrick is: _${wulfrick}_`);
console.log(`wulfrickSpace is: _${wulfrickSpace}_`);
console.log(`ian is: _${ian}_`);
console.log(`bus is: _${bus}_`);
