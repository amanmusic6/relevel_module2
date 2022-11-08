const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
   let noOfUser=1;
  readline.question1(`1Player or 2Player?`, num => {
    noOfUser=num;
    console.log(`Hi..You are playing ${num} player game`);
    readline.close();
  });
function app(noOfUser){
  let x;
  let y;
  let count=9;
  let user1Tern=true;
  let user2Tern=false;
  let arr=[['b','b','b'],['b','b','b'],['b','b','b']];
  while(count>0){
    if(user1Tern){
      readline.question2(`select any tile`, x,y => {
        while(arr[x][y] !== 'b'){
          readline.question2(`select any tile`, x,y => {});
        }
        arr[x,y]= "0"
        readline.close();
      });
      user2Tern=true;
      user1Tern=false;
    }
    if(user2Tern){
      readline.question2(`select any tile`, x,y => {
        while(arr[x][y] !== 'b'){
          readline.question2(`select any tile`, x,y => {});
        }
        arr[x,y]= "0"
        readline.close();
      });
      user2Tern=false;
      user1Tern=true;
    }
    count--;
  }
  //-----------------------check result------------------
  if((arr[0][0]===arr[0][1]===arr[0][2])==="0" || (arr[1][0]===arr[1][1]===arr[1][2])==="0" || (arr[2][0]===arr[2][1]===arr[2][2]===0) ||
  (arr[0][0]===arr[1][0]===arr[2][0])==="0" || (arr[0][1]===arr[1][1]===arr[2][1])==="0" || (arr[0][2]===arr[1][2]===arr[2][2]===0 ) ||
  arr[0][0]==arr[1][1]===arr[2][2]==="0")
  return "first user wins"
  if((arr[0][0]===arr[0][1]===arr[0][2])==="1" || (arr[1][0]===arr[1][1]===arr[1][2])==="1" || (arr[2][0]===arr[2][1]===arr[2][2]===1) ||
  (arr[0][0]===arr[1][0]===arr[2][0])==="1" || (arr[0][1]===arr[1][1]===arr[2][1])==="1" || (arr[0][2]===arr[1][2]===arr[2][2]===1 ) ||
  arr[0][0]==arr[1][1]===arr[2][2]==="1")
  return "second user wins"
  else
  return "no one wins"


}
app(noOfUser);