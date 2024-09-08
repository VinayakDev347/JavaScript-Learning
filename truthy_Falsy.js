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
