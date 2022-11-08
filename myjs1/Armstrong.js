let num = 153;
let temp = num;
let sum=0;
while(num>0)
{
    let digit = (num%10);
    num = Math.floor(num/10)
    sum = sum+Math.pow(digit,3);
}
if(sum === temp)
{
    console.log("Armstrong no.");
}
else
    console.log("not a armstrong no.");