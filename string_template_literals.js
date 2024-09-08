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

//--------------Conditions-------------=if/else-------------------------
const age = 15;
if (age>=18) {
    console.log("you can take licence!!")
}else{
    console.log(`after ${18-age} years you can take licence!!`)
}


// ------------------------------------------------------------------------
const birthYear = 1998;

let centuary;               //need to define let outside  
if (birthYear <= 2000){
    centuary = 20;
}else{
    centuary =21;
}
console.log(centuary)
