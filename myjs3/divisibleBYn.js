let arr = [12,14,21,44,35,77,87];

const  fun= (arr,n)=>arr.filter((Element)=>Element%n===0);

console.log(fun(arr,7));