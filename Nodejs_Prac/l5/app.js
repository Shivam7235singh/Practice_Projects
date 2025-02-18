// const Emitter = require("./emitter"); this is my custom module 
const Emitter = require("events") ; // this is core node js module 
const events = require("./config");

const emitr = new Emitter();
// console.log(emitr());

emitr.on(events.GREET , function(){
    console.log("hello Shivam ");
})
emitr.on(events.GREET, function(){
    console.log("Hey Shivam how are you ");
})
emitr.on(events.FILEOPENED , function(){
    console.log("hey shivam are You open the file ");
})
emitr.on(events.FILESAVED , function(){
    console.log("hey shivam are You saved the  file  or not ");
})

emitr.emit(events.GREET);
emitr.emit(events.FILEOPENED);
emitr.emit(events.FILESAVED);

