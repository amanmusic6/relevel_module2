let num = 153;
let sum=0;
let newno =0 ;
while(num>0)
{
    let digit = (num%10);
    num = Math.floor(num/10)
    newno = newno*10 + digit
}
console.log(newno);
