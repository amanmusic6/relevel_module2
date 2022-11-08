// let arr = [1,2,3,4,5,6,7,8,9,10];
// let result = Array.from(Array(2),()=> new Array(5))

// let fun =function(arr){
//         arr.map((Element,index)=>{
//             if(index<arr.length/2)
//                 result[0][index]=Element;
//             else
//                 result[1][index-5]=Element;
//         })
//         return result;
// }
// console.log(fun(arr));

let A=[1,2,3,4,5,6,7,8,9,10]
let M = []
let n = A.length
let num_row=5;
for(let idx=0 ; idx<n; idx=idx+num_row){ //0,5
M.push(A.slice(idx,idx+num_row))
}
console.log(M);