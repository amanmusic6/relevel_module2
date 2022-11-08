//let num = 34;
let myno = 30;
for(let i = 2;i<=myno;i++)
    {
        if(check(i))
            console.log(i);
    }

function check(num)
{
    let flag = 0;
    for(let i =2;i<num;i++)
    {
        if(num%i === 0)
        {
            flag = 1;
            break;
        }
    }

    if(flag==0)
        return true;
    else 
        false
}


