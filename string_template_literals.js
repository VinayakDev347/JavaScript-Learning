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
