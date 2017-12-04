let myString: string;
let myNum: number;
let myBool: Boolean;
let myVar: any;

/*
let strArr: string[];
let numArr: number[];
let boolArr: Boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<Boolean>;
let strNumTuple: [string, Number];


myString = 'Hello World'.slice(0, 3);
myNum = 100;
myBool = false;
myVar = 5;
strArr = ['Hello', 'World'];
numArr = [1, 2, 3, 4, 5];
boolArr = [true, false, true];
strNumTuple = ["Avinash", 5, 6, 'Maricharla'];

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strNumTuple);