function sum (a, b){
    return a+b;
}

console.log(sum(200, 300));

function greetingWithSum(text , a, b , sum ){
    const result = sum(a, b);
    console.log(text  , result ) ;
}

greetingWithSum("hey shivam your sum is : " , 200, 200, sum );