let num1 = 18;
let num2 = 42;

let res = Math.min(num1,num2)

while(res>0)
{
    if(num1%res==0 && num2%res==0)
        {
            break;
        }
        res--;
}

console.log(res);