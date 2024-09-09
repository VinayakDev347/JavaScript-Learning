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

/*
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


x= 5;
y= 10
sum = x+y;
console.log(sum)

const birthyear=2001;
// birthyear = 1999;           // show error birthyear is constant value
console.log(birthyear);

let birthdate=13;
birthdate = 12;                 //we can change the value if it was declaired using let
console.log(birthdate);



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
 


//Q to find BMI of 2 person mark and john 
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark  = massMark / (heightMark * heightMark);
console.log("BMI of Mark is :",BMIMark )

let BMIJohn  = massJohn / (heightJohn * heightJohn);
console.log("BMI of Mark is :",BMIJohn )




const firstname = 'johns';
const job = 'teacher';
const birthdate = 2001;
const year = 2024;

// concating strings
const johns = "i'm " + firstname + ', a ' + (year-birthdate) +'year old ' + job + "!";
console.log(johns)

// easy method to concatinate string
const newjohns = `i'm new ${firstname}, a ${year-birthdate} years old, ${job}`;
console.log(newjohns)

//multiple line printing method
console.log("string with \n\
mulitple\n\
lines of code!!")


//----------- CONTROL STATEMENTS----------------------

//1)
// const age = 2;
// if (age>=18) {
//     console.log("you can drive")
// }else{
//     console.log("you cannot drive the vehicle,wait to get age 18")
// }

// 2)
const age = 15;
if (age>=18) {
    console.log("you can take licence!!")
}else{
    console.log(`after ${18-age} years you can take licence!!`)
}


//-----------------------------------------------------
const birthYear = 1998;

let centuary;               //need to define let outside  
if (birthYear <= 2000){
    centuary = 20;
}else{
    centuary =21;
}
console.log(centuary)

//------------Type conversion--------------------
const inputYear = '2021';           //string
console.log(Number(inputYear));
console.log(Number(inputYear)+18);          //202118, we need to get 2039 so call Number(str) it change string to number!

console.log(Number("vinu"));            //NaN = NOt an number ,its type is numnber but the value of the number is invalid!
console.log(typeof(NaN))

console.log(String(23),23);

// ----------Type coercion------------------------
console.log(`I am `+ 23 + `years old`);     // I am 23years old
console.log(`23` - `10` - 3);               //10
console.log(`23` / `2`);                    //11.5
console.log(`10`-`4`-`3`-2+`5`)             //15
console.log(2+3+4+`5`);                     //95


//--------Truthy and Falsy values-------------------------

//falsy values = 0, ' ', undefined, null,Nan:-
console.log(Boolean(0));        //falsy
console.log(Boolean(undefined));//falsy
console.log(Boolean("johns"));  //true
console.log(Boolean({}));       //true
console.log(Boolean(''));       //falsy

const money= 0 ;
if (money){
    console.log("dont spend it!!")
}else{
    console.log("you should get a job!!")           //this print,its falsy,defined value is 0
}

let height;
if(height){
    console.log("yay!! Height is defined")
}else{
    console.log("Height is undefined!!!")           //this print,its false,undefined
}
    
//-------------  == and === relations----------------------------------

// === define strict equality and == loose equality
const age = 20;
if (age===20) console.log("its === 20") //true its equal

if (age==20) console.log("its == 20")   //true its equal

const age1='20';
if (age1===20) console.log("its === 20") //False 

if (age1==20) console.log("its == 20")   //true its equal

//eg
const number = prompt("enter a number: ");
console.log(number);                                    //23
console.log(typeof(number));                            //string
if (number==23) console.log("its wonderfull number!");  //its wonderfull number!

if (number===23) console.log("its triple equal number") //will not print data type is not equal

//------------Boolean Logics---------------

//AND ,OR, NOT

//AND----> 2 value must be true                         &&
//OR ----> any one is true output is True               ||
//NOT ---->If its true output is false ,direct opposit   ! 



//----------------------switch statements---------------

const day = 'friday';
 switch(day) {
    case 'monday':                              //day===monday
        console.log('plan course structure');
        console.log('go for coding meet up');
        break;
    case 'tuesday':
        console.log("prepare for interview");
        break;
    case 'wednesday':
        console.log("write code bro!")
        break;
    case 'thursday':
        break;
    case 'friday':
        console.log("refresh your week works!");
        console.log("search for any party in sat and sunbday!!");
        break;
    case 'saturday':
        break;
    case 'sunday':
        console.log("sunday..funday!!!");
        break;
    default:
        console.log("Enter any valid day broo!!!")
        break;
 }
*/
