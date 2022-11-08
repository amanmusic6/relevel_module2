//factorial of a number
let num = 5;
let result = 1;
function factorial(num){
    if(num==1)
        return result;
    result*=num;
    return factorial(num-1);
}
factorial(num);
console.log(result);
console.log("time complaxity is O(n)");