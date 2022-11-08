// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`how are you?`, () => {
//     console.log("good");
//     readline.close();
//   });

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`how are you?`, () => {
  console.log();
  readline.close();
});