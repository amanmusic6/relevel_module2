// normal function

function fun(a,b){
    return a+b;
}
console.log(fun(2,6));

// Arrow function

let funArrow=(a,b)=>{
    return a+b;
}
console.log(funArrow(1,2));

let fun1 = (a,b)=>a+b;
console.log(fun1(6,3));

let calculateMax = (input1)=>{let max = input1; return (input2)=>{max = Math.max(max,input2); return (input3)=>{return Math.max(max,input3)}}}
console.log(calculateMax(5)(9)(1));

// sum of 3 numbers

let sum = (a)=>(b)=>(c)=>a+b+c;
console.log(sum(2)(6)(9));