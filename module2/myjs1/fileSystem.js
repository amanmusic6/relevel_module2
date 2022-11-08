const myfile = require('fs');
// myfile.readFile('./myTxtFile.txt','utf-8',(error,data)=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log("readFile is asyn functioin");

let dta= myfile.readFileSync('./myTxtFile.txt','utf-8')
console.log(dta);
console.log("i am syncronous");