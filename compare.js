"use strict";

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

console.log(student1);
console.log(student2);

if (student1 == student2) {
  console.log("They are the same");
} else {
  console.log("They are not the same...");
}
