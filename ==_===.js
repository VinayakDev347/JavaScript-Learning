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
