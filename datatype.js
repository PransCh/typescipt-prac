"use strict";
let lname;
lname = "prans";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25.56;
let res = parseInt("25");
let empList;
let numList;
empList = ["John", "Mike"];
numList = [90, 7, 1, 4];
let ans = numList.filter((num) => num > 2);
console.log(ans);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let C = 1;
let swp;
function swap(num1, num2) {
    return [num2, num1];
}
swp = swap(10, 20);
console.log(swp[1]);
