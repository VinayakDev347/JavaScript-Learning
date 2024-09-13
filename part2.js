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


//---------------------------------------------------------------------------------------
//1 function declaration (we can call where ever we want)
function calAge1(birthYear){
  return 2024-birthYear;
}

const age1 = calAge1(2001);
// console.log(age1)         //23

//2 : Function expression(Anonymous function )
const calAge2 = function(birthYear){
  return 2024-birthYear;
}

const age2 = calAge2(1991);
console.log(age1,age2)        //23 33
*/

//---------------------arrow function -----start
const calAge2 = function(birthYear){
  return 2024-birthYear;
}
//arrow function
const calAge3 = birthYear => 2024-birthYear;
const age3 = calAge3(1991);                     
console.log(age3);                              //33


const yearUntilRetirement = (birthYear,name) => {
  const age = 2024-(birthYear);
  const retirement = 65 - age;
  return `${name} retires in ${retirement} years!!`
}

console.log(yearUntilRetirement(1991,'johny'));     //johny retires in 32 years!!
console.log(yearUntilRetirement(2001,'viknu'));     //viknu retires in 42 years!!

//-----------------------------------------------------------------------------------

//---------here function call another function -------------------
const cutPieces = function(fruit){
  return fruit * 4;
}

const fruitProcessor = function(apple,orange){
  const applePiece = cutPieces(apple);
  const orangePiece = cutPieces(orange);

  const juice = `Juice with ${applePiece} piece of apples and ${orangePiece} piece of oranges.`;
  return juice;
};

console.log(fruitProcessor(2,3));           //Juice with 8 piece of apples and 12 piece of oranges.
console.log(fruitProcessor(3,5));           //Juice with 12 piece of apples and 20 piece of oranges.


//------------- Reviewing Functions--------------------
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

//-----------------------------------------------------------

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);                              //['Michael', 'Steven', 'Peter']

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);                                    //[1991, 1984, 2008, 2020]

console.log(friends[0]);                           //Michael
console.log(friends[2]);                           //Peter

console.log(friends.length);                      //3
console.log(friends[friends.length - 1]);         //Peter

friends[2] = 'Jay';
console.log(friends);                             //['Michael', 'Steven', 'Jay']
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]; 
console.log(jonas);                              // ['Jonas', 'Schmedtmann', 46, 'teacher', Array(3)]
console.log(jonas.length);                       //5
//---------------------------------------------------------------------------

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);                   //2037 - 1990
const age2 = calcAge(years[1]);                   //2037 - 1967
const age3 = calcAge(years[years.length - 1]);    //2037 - 2018
console.log(age1, age2, age3);                    //47 70 19

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);                                //(3) [47, 70, 19]

//-------------------------------------------------------
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];       


// Add elements
const newLength = friends.push('Jay');
console.log(friends);                             // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength);                           //4

friends.unshift('John');                          //['John', 'Michael', 'Steven', 'Peter', 'Jay']
console.log(friends);                             //5

// Remove elements
friends.pop();                                    // remove Last
const popped = friends.pop();                     
console.log(popped);                              // peter 
console.log(friends);                             //['John', 'Michael', 'Steven']

friends.shift();                                   //remove First
console.log(friends);                              //['Michael', 'Steven']

console.log(friends.indexOf('Steven'));           //1
console.log(friends.indexOf('Bob'));              //-1

friends.push(23);
console.log(friends.includes('Steven'));          //True - if there 
console.log(friends.includes('Bob'));             //False - if not there
console.log(friends.includes(23));                //True,if we push '23' as string then its false

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven'); //You have a friend called Steven
}


//////////---------------------------------------------------------------------
