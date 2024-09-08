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

//Operators

//Arithmetic Operators Example :- Addition,Subtraction,Multiplication,Exponentiation ,Division,Modulus,Increment,Decrement

// Addition operator(+)
const x1 = 100;
const y1 =20;
const sum1 = x1 + y1;                       //addition
const sub1 = x1 - y1;                       //substraction
const mul1 = x1 * y1;                         //multiplication 
const exp1 = x1 ** y1;                        //Exponentiation
const div = x1 / y1;                        //Division
const mod = x1 % y1;                        //Modulus - remainder

let num = 5;                                //increment              
num++;                                      // 6
let numb = 5;                               //decrement 
num--;                                      //4

console.log("sum of the x & y is",sum1 +'.'+ "sub of x & y is ",sub1,+'.'+ "mul of x & y is ",mul1);


// Assignment Operator

let x2 = 10 ; //10
x2 += 10;       //20
x2 *= 4;        // x2 = x*4 = 80
x2++;           // x2=x+1 =81
x2--;           // x2=x+1 =80


//comparisonn operator: - < , > , <= , >=
let myage = 20;
let hisage = 25;
console.log(myage<hisage)       //true
console.log(myage>hisage)       //false

