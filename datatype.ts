let lname: string= "prans";
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 25.56; // can give decimals for number datatype
let res = parseInt("25"); // typecasting

// let valid : boolean
// console.log(valid) // error in ts but not in js as js dont know types as we used strict:true in ts config.json file

// Two ways to use arrays in ts
let empList: string[]; // using square brackets with datatype

let numList: Array<number>; // using generics

empList = ["John", "Mike"];

numList = [90, 7, 1, 4];

let ans = numList.filter((num) => num > 2);
console.log(ans); // [90, 7, 4]

let sum = numList.reduce((acc, num) => acc + num); // reduce the arr to its sum 102
console.log(sum);

const enum color {
  // const is magic it keeps index value and trim down all other info
  red,
  green,
  blue,
}
let C: color = color.green; // on compiling it don't give type

// tuples
let swp: [number, number];
function swap(num1: number, num2: number): [number, number] {
  return [num2, num1];
}
swp = swap(10, 20);
console.log(swp[1]);

let dept: any; // try to avoid the any keyword

var zoo: any[] = [10, "lion", "cat"];
console.log(zoo[1]);

function print(id:string|number){
    console.log("Id "+id); // union type so we cant use meths like toUpperCase as number is also present 
}
print(24)

function print2(id:string|number|Array<any>){
    if(typeof id=="string")
    console.log("Id (string)"+id); 
    if(Array.isArray(id)) // used to narrow union function based on a spec type
    console.log("Hello, " + id.join(" and "));
    else console.log("Id (int)"+id);
}

print2("Hello")
var arr:any[]=[10,"Demo","check"]
print2(arr);

type point={
    x:number;
    b:number;
}; // we can declare our own object to use, can also use interface

function print3(id:point){
    let temp=`x ${id.x},y ${id.b}`;
    return temp;
}
console.log(print3({x:200, b:500}));

type point2<T extends string>={
    [key in T]:number;
}

