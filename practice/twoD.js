let arr = [1,1,1,1,1]
let n = 5
let obj = {}

function uniqueElementSum(n, input){
   //write your logic here. Return the output
//    let sum=0;
//    input.forEach(element=>{
//     if(!(element in obj))
//         obj[element] = 1
//     else
//         obj[element]++;
// })
//     for(const [key,value] of Object.entries(obj)){
//         if(value===1){
//             let temp = parseInt(key)
//             sum=sum+temp
//         }
//     }
//     return sum;
let uniqueArr = new Set(input)// it will remove duplicates from arr.
 let sum = 0;
 uniqueArr.forEach(element=>sum+=element)
 return sum;
}
console.log(uniqueElementSum(n, arr));

