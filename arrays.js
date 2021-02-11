"use strict";

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);

let newarr = letters;

newarr[4] = "*";

console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];
let result;
// result = people.push("Draco");
// result = people.pop();
// result = people.push("Neville");
// result = people.push("Luna");
result = people.slice(0, 3);
// result = people.slice(1, 0, "Cho");
// people[1] = "Ginny";
// result = people.push("Fred", "George");
// result = people.indexOf("Fred");
// result = people.splice(result, 1);
// result = people.unshift("Wilfred");
// result = people.shift();

console.log(result);
console.log(people);

// const str = "abcdefghijklmn";
// // const arr1 = str.split();
// const arr2 = Array.from(str);
// const str2 = arr2.toString();
// console.log(str2);
