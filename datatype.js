"use strict";
let lname = "prans";
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
let dept;
var zoo = [10, "lion", "cat"];
console.log(zoo[1]);
function print(id) {
    console.log("Id " + id);
}
print(24);
function print2(id) {
    if (typeof id == "string")
        console.log("Id (string)" + id);
    if (Array.isArray(id))
        console.log("Hello, " + id.join(" and "));
    else
        console.log("Id (int)" + id);
}
print2("Hello");
var arr = [10, "Demo", "check"];
print2(arr);
function print3(id) {
    let temp = `x ${id.x},y ${id.b}`;
    return temp;
}
console.log(print3({ x: 200, b: 500 }));
