//method 1
let arr = [ [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
]
// let k=0;
// let r = 4;
// let c = 4;

// let fun = ((arr) =>{
//     let sum1 =0;
//     let sum2 =0;
//     let sum3 =0;
//     let sum4 =0;
//     for(let i=0;i<r;i++){
//     for(let j=0;j<c;j++){
//         if(j===0) sum1 = sum1+arr[i][j];
//         if(j===1) sum2 = sum2+arr[i][j];
//         if(j===2) sum3 = sum3+arr[i][j];
//         if(j===3) sum4 = sum4+arr[i][j];
// }}
//     return [sum1,sum2,sum3,sum4];
// })
// method 2
// let fun1 = ((arr) =>{
//    let lst =[]
//     for(let i=0;i<r;i++){
//         let temp=0;
//         for(let j=0;j<c;j++){
//             temp+=arr[j][i];
//     }
//     lst.push(temp)
// }
//     return lst
// })
//method 3

let arraySum = arr.reduce((arr1,arr2)=> arr1.map((sum,id) => sum+arr2[id]))
console.log(arraySum);






// console.log(fun1(arr));
