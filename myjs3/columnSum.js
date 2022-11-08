let M=4,N=3;
const arr = [[3,4,5],
             [3,4,2],
             [2,3,4],
             [4,4,4]];

var col_sum = arr.reduce(
    (A, B) => 
        A.map((X, idx) => X + B[idx])
    ); 

console.log(col_sum);