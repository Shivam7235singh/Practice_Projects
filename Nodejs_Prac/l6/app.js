// const fs = require("node:fs/promises");
const fs = require("node:fs");

// Reading file
// console.log("before reading ...")

// fs.readFile("input.txt", "utf-8", (err, data) => { // asyncronous function  non blocking 
//     if (err) throw err;
//     console.log(data);
// });

//  async function reacdFileAsync() {
//     try {
//         const data = await fs.readFile('input.txt' , 'utf-8')
//         console.log(data);        
//     } catch (error) {
//         throw error
//     }
// }
// reacdFileAsync();
// console.log("after reading ...")

// console.log("before reading ...")
// const data = fs.readFileSync("input.txt" , 'utf-8'); // syncronous  blocking 
// console.log(data);
// console.log("after reading ...")



// write file 

// fs.writeFile("input.txt" , "Hello world" , (err) =>{
//       if(err)throw err;
// })

// fs.appendFile("input.txt" , "\nHello Node js Devoloper " , (err) =>{
//     if(err) throw err;
// })

// delete input file 
// fs.unlink("input.txt", (err) =>{
//  if(err) throw err ;
// });

// recommdation 

// const readStreem =  fs.createReadStream("input.txt" , 'utf-8' ,(err) =>{
//     if(err) throw err;
// })

// readStreem.on('data' , (chunk) =>{
//     console.log(chunk);
// })
// readStreem.on('end' , () =>{
//     console.log("reading is complete .... ");
// })

// const writeStream = fs.createWriteStream('index.txt' , 'utf-8');
// writeStream.write("hey node js Developer ");

//  pipe for copy the data 

const readStream = fs.createReadStream('input.txt', 'utf-8');
const writeStream = fs.createWriteStream('index.txt', 'utf-8');

readStream.pipe(writeStream);