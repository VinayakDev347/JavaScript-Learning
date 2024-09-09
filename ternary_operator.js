//----------condition (ternary) operator-------------

//THIS HAS 3PARTS SO ITS CALLED TERNARY OPERATOR

// 1.first method
const age = 1;
age >= 18 ? console.log("can drink wine!"):
console.log("can drink only water!!")           //can drink only water!!

// 2.second method
const age1 = 15
const drink = age1 >= 18 ? 'wine': 'water '; 
console.log(drink);                             //water

// 3.third method
const age3 = 21;
let drink2;
if(age3>=18){
    drink2="wine";
}else{
    drink2="water";
}
console.log(drink2);

// 4.forth method
console.log(`i linke to drink ${age3 >= 18 ? 'wine': 'water'}`);
