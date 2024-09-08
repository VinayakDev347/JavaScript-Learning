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

//declairing variable in 3 types :- var,let,const

/* When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.*/

//this are automaticaly var :-
x= 5;
y= 10
sum = x+y;
console.log(sum)

//const :-
const birthyear=2001;
// birthyear = 1999;           // show error birthyear is constant value
console.log(birthyear);


//let :-
let birthdate=13;
birthdate = 12;                 //we can change the value if it was declaired using let
console.log(birthdate);

// this auomaticaly use var as declairing 


