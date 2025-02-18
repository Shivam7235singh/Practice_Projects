// let a = 19 ;
// let b = 12;
// console.log(a+b);



// function statement
function greet(){
    console.log("greet");
}
greet(); // invoke 

// function are first class :- function argument function pass karte hai 

function logGreeting(fn){
    fn();
}
logGreeting(greet);

// function expression 
const fun = function (){
    console.log("this is functin expression ");
}

fun();

// use the function expression on the fly 

logGreeting( function (){
    console.log("this is functin expression ");
});