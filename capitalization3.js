"use strict";

const name1 = "peter";

const name2 = name1.substring(2, 3).toUpperCase();

const part1 = name1.substring(0, 2);
const part2 = name1.substring(3, 5);

console.log(`${part1}${name2}${part2}`);
