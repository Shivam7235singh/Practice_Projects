// lateral object created 
let person = {
    first_name : "shivam",
    last_name  : "singh",
      
    //  methods
    getFunction : function(){
        return (`first name is ${first_name} and last name is ${this.last_name}`);
    },

    phone : {
        mobile_no : "7258989115",
        landLine : "028526"
    }
}

console.log(person.first_name , person.last_name);
console.log(person.phone.mobile_no, person.phone.landLine);

// Using an Object Constructor.

function persons(first_name , last_name){
    this.first_name = first_name,
    this.last_name = last_name
};

let person1 = new persons("Ankur", "Singh");
let person2 = new persons("Saurabh" , "Singh");

console.log(person1.first_name,  person1.last_name);
console.log(`${person2.first_name} ${person2.last_name}`);