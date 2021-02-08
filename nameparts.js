"use strict";

const name = "Peter Heronimous Lind";

let firstSpace = name.indexOf(" ");
let lastSpace = name.lastIndexOf(" ");

let firstName = name.substring(0, firstSpace);
let middleName = name.substring(firstSpace, lastSpace);
let lastName = name.substring(lastSpace);

console.log(firstName);
console.log(middleName);
console.log(lastName);
