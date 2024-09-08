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
