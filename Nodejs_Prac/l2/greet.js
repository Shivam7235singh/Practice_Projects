// module -> module is piece of code that is used across all the nodejs application 

function greet(a, b){
    console.log("hey shivem this is module function ",  a+b)
}

function sub(a, b){
    const res = a > b ? a-b : b-a ;
    return res ;
}
// module.exports = greet
module.exports =  {
    greet ,
    sub
}
