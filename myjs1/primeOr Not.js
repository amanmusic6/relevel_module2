let num = 34;

let flag = 0;

for(let i =2;i<Math.sqrt(num);i++)
{
    if(num%i == 0)
       {
        flag = 1;
        break;
       }
}

if(flag==0)
    console.log("prime number");
else
    console.log("not a prime number");