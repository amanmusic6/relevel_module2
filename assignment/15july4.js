let binaryNo = 101001100;
let arr = Array.from(String(binaryNo))
let count0 = 0;
let count1 = 0;
arr.forEach(value=>{
    if(value==0) count0++;
    else count1++;
})
console.log(count0);
console.log(count1);