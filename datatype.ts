let lname : string;
lname = "prans";
let newname = lname.toUpperCase();
console.log(newname);

let age : number;
age = 25.56; //can give decimals for number datatype
let res = parseInt("25"); //typecasting

// let valid : boolean
// console.log(valid) // error in ts but not in js as js dont know types as we used strict:true in ts config.json file

//Two ways to use arrays in ts
let empList : string[]; //using square brackets with datatype

let numList : Array<number>; //using generics

empList = ["John", "Mike"];

numList = [90, 7, 1, 4];

let ans = numList.filter((num)=>num>2);
console.log(ans); //[90, 7, 4]

let sum = numList.reduce((acc, num)=>acc+num) //reduce the arr to its sum 102
console.log(sum)

const enum color{ // const is magic it keeps index value and trim down all other info
    red,
    green,
    blue
}
let C:color= color.green; //on compiling it dont give type 

//tuples
let swp: [number, number];
function swap(num1:number,num2:number) : [number, number]{
    return [num2, num1];
}
swp =  swap(10, 20);
console.log(swp[1]);