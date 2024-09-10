'use strict';  //helps to find error in code easily

///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;                
if (hasDriversLicense) console.log('I can drive :D');        //i can drive:D -----because of using strictmode if error occur it shows in console  as warning!!!

// const interface = 'Audio';
// const private = 534;             //cant use private as variable name


///////////////////////////////////////

 
//--------------Functions---------------------------------
// function logger() {
//     console.log('My name is Johns');
//   }


//   // calling / running / invoking function

// function are of 2 types they are buildin functions and inbuid function
//buildin function we make it, inbuild fucntion which are already there like "Number"(help to change str to num)
const num=Number('12');   //if there is no inbuild function 'Number' used then the output will be string!
console.log(typeof(num)); //number
//eg1 : not returning value
  logger();
  logger();
  logger();

//eg2 : here returning values 
function fruitProcess(apple,orange){
  // console.log(apple,orange);
  const juices = `Juice with ${apple} apples and ${orange} oranges!!`;
  return juices;
}

const appleJuice = fruitProcess(5,0);   //5 0
console.log(appleJuice);                //Juice with 5 apples and 0 oranges!!

const orangeJuice = fruitProcess(3,7);
console.log(orangeJuice);               //Juice with 3 apples and 7 ooranges!!
