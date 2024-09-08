/*
 Data types 

1.primitive (hold single values)

String
Number
Bigint
Boolean
Undefined
Null
Symbol

2. Non-primitive Data type

Object
List 
 */


let javaScriptIsFun = true;
console.log(javaScriptIsFun);           //true

console.log(typeof true);               //boolean
console.log(typeof javaScriptIsFun);    //boolean
console.log(typeof 23);                 //number
console.log(typeof "vinu");             //string

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun); 

let year;
console.log(typeof year);               //undefined

year=2001;
console.log(typeof year);               //number

console.log(typeof null);               //object