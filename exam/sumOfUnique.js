let n = 5;
let arr = [1,1,1,1,1];

// function uniqueElementSum(n, input){
//     let mp = {};
//     let sum=0;
//     input.forEach(element => {
//         if(!(element in mp)){
//             mp[element]=1;
//         }
//         else{
//             mp[element]++;
//         }
//     });
//     console.log(mp);
//     for(const [key,value] of Object.entries(mp)){
//         if(value===1){
//             let temp = parseInt(key)
//             sum+=temp;
//         }
//     }
//     return sum;
// }
// console.log(uniqueElementSum(n,arr));

function uniqueElementSum(n, input){
    let sum=0;
    let obj={};
    input.forEach(element=>{
     if(!(element in obj))
         obj[element] = 1
     else
         obj[element]++;
 })
     for(const [key,value] of Object.entries(obj)){
         if(value===1){
             let temp = parseInt(key)
             sum=sum+temp
         }
     }
     return sum;
    }
     console.log(uniqueElementSum(n,arr));

//  let uniqueArr = new Set(input)// it will remove duplicates from arr.
//   let sum = 0;
//   uniqueArr.forEach(element=>sum+=element)
//   return sum;
//  }