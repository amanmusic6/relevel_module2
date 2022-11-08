/* print below pattern
*
**
***
****
*****
******
*/
/*function printstar(num){
    let temp = "";
    for(let i=0;i<num;i++){
        temp =temp + "*";
    }
    return temp;
}
let ab =0;
function recStar(num){
    console.log(printstar(ab));
    ab++;
    if(ab<=num)
        recStar(num);


}
recStar(5);*/
//another way
/*function star(start,end){
    console.log("*".repeat(start));
    start++;
    if(start<end)
        star(start,end);
    
}
star(1,6);*/

// recursive function for prime number
// === and <= are same
/*function isPrime(num){
    if(num <= 1) return false;
    if(num <= 2) return num;
    for(let i=2;i<num;i++){
        if(num%i=== 0)
            return false
    }
    return num;
}
function recPrime(start,end){
    let temp = isPrime(start);
    if(temp)
        console.log(temp);
    start++;
    if(start<=end)
        recPrime(start,end);
}

recPrime(5,25)*/

// sum a number until it becomes a single digit number
function findSum(num){
    let temp = num;
    let len =0;
    while(temp>0){
        len++;
        temp=Math.floor(temp/10);
    }
    let sum = 0;
    while(len>0){
        let digit = num%10;
        num = Math.floor(num/10);
        sum = sum+digit;
        len--;
    }
    return sum;
}
function sumFun(num){
    let s = findSum(num);
    if(s>9){
        num =s;
        sumFun(num);
    }
    else
    console.log(s);
        
}
sumFun(458542)