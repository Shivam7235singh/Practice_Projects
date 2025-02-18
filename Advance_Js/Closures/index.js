function init(name){

    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = init("Shivam Kumar singh"); 
myFunc();

function makeAdder(x){
    function add(y){
        console.log(x+y);
    }
    return add;
}

const adder5 = makeAdder(5);
const adder10 = makeAdder(10);

adder5(2);
adder10(5);

function MakeAdder(x){
    return function(y){
        return x+y;
    }
}

const adder15 = MakeAdder(15);
const adder20 = MakeAdder(20);

console.log(adder15(10));
console.log(adder20(10));

// Practical Example of Closures Dom Manupulation

// const btn = document.getElementById("button");
// const h1 = document.getElementById("root");

// function MakeChanger(size){
//     return function(){
//         h1.style.fontSize = `${size}px`
//         h1.style.color = "red"; 
//     }
// }

// const size20 = MakeChanger(20);
// const size75 = MakeChanger(75);

// btn.addEventListener("click", size20);
// btn.addEventListener("click", size75);

// increment and decrement counter using closures

function MakeCounter(){
    let count = 0 ;
    function changeBy(val){
        count +=val ;
    }

    return {
        increment(){
            changeBy(2);
        },
        decrement(){
            changeBy(-1);
         },
        value(){
            return count;
        }
    }
};

const counter = MakeCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

// function greet(){
//     console.log("Hello Shivam ");
// }
// greet();

// function newGreet(fn){
//     fn();
// }

// newGreet(greet);