"use strict";

const bool = true;
const num = 41;
const str = "Peter";
const obj = {
  cats: 2,
  cars: 1,
};
const nothing = null;
let undef;
const symbol = Symbol("symbol");

const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

const value = " ";

if (value) {
  console.log("value is truthy");
} else {
  console.log("value is falsy");
}
