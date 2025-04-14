//1 Reverse a string without using .reverse()
function solve(arr){
    let reverse = ""
    for(let i  = arr.length -1; i>= 0; i--){
         reverse += arr[i];
    }
    return reverse;
}

console.log(solve("shivam"));

// 2  Check if a string is a palindrome

function Palindrom(str){
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(Palindrom("shivam"));
console.log(Palindrom("aaaaaa"));

// 3   Find the first non-repeating character in a string

function repeat(str){
    let arr = {};
    for(let ch of str){
        arr[ch] = (arr[ch] || 0) +1;
    }
    for(let ch of str){
        if(arr[ch] ===1) return ch;
    }
}
console.log(repeat("aalphjjkkdcbkjbvpl"));

// 4 Remove duplicates from an array

function solve4(arr){
    return [... new Set(arr)];
}

console.log(solve4([1, 2, 3, 4, 45,5,6, 6,7, 8,7, 7]));


// 5 Find the largest and smallest numbers in an array

function solve5(arr){
    return { max : Math.max(...arr), min : Math.min(...arr)};
}

console.log(solve5([2, 3, 4, 5 ,676,7, 8, 9,9]));

// deep clone 

function deepclone(obj){
    if(obj == null || typeof obj != 'object'){
        return obj ;
    }

    if(Array.isArray(obj)){
        return obj.map(deepclone);
    }

    const cloneObj = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){ 
        cloneObj[key] = deepclone(obj[key]);
        }
    }

    return cloneObj ;
}

const obj = {a : 1,b:2, c:3,d :{e: 4}};
const cloneobj =  deepclone(obj);

console.log(cloneobj);

// Merge Two Sorted Arrays Without Duplicates

function mergeTwosortedArray(arr1 , arr2){
    let merge = [new Set([... arr1 , ... arr2])];
    return merge.sort((a, b) => a-b);
}

console.log(mergeTwosortedArray([2, 3, 4, 5], [7, 8, 9, 10, 29]));

// frequency 

function freq(arr){
    let maxCount = 0, maxFreqt = null;

    let mapping = {};

    for(let num of arr){
         mapping[num] = (mapping[num] | 0) +1;
         if(mapping[num] > maxCount){
            maxCount = mapping[num];
            maxFreqt = num;
         }
    }

     console.log(maxCount, maxFreqt);
     
}

freq([1, 23, 4, 5, 5, 6, 67, 7,67, 67, 88, 88, 99]);

Array.prototype.customMap = function(callback){
    let result = [];
    for(let i = 0 ; i<this.length; i++){
        result.push(callback(this[i], i , this));
    }
    return result ;
};

console.log([2, 3, 4, 5, 6].customMap(x =>x*2));

Array.prototype.customFilter = function(callback){
    let result = [];
    for(let i =0; i<this.length ; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
};

console.log([2, 3, 4, 5, 6, 7, 8].customFilter(x => x%2 === 0));










// OBJECT 
// Implement a class using ES6

class Person {
    constructor(name , age){
        this.name = name ,
        this.age = age
    }

    greet(){
        console.log(`hello ${this.name} you are ${this.age} years old`);
    }
}

const person = new Person("Shivam", 23);

person.greet();

//  Explain Prototype Chain and Inheritance

function Animal(name){
 this.name = name 
}

Animal.prototype.speek = function(){
    console.log(`${this.name} make a sound`);
}

function Dog(name , bread){
    Animal.call(this , name );
    this.bread = bread;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog ;

Dog.prototype.bark = function(){ 
    console.log(`${this.name} is bark`);
}


const dog = new Dog("sheru" , "bread");
dog.speek();
dog.bark();


// <---------------------------------->
function Fruit(name , taste){
    this.name = name ;
    this.taste = taste;
}

Fruit.prototype.quality = function(){
    console.log('${this.name} is my favorate fruit and its taste is ${this.taste}')
}

function Apple(name , taste){
 Fruit.call(this , name, taste);
 
}

Apple.prototype = Object.create(Fruit.prototype);
Apple.prototype.constructor = Apple;


Apple.prototype.color = function(){
    console.log(`${this.name}'s color is red`);
}

const apple = new Apple("apple" , "sweet");
apple.color();


const animal = {
    speek(){
        console.log('this is speek method');
    }
};

const dogs = Object.create(animal);
dogs.speek();


function abc() {};
abc.prototype.call = function(){
    console.log(`this is call method using new key words`);
}

const ab = new abc();
ab.call();
