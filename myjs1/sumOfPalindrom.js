let n =122;
for(let i = 1;i<=n;i++)
{
    let ret = palindrom(i)
    if(ret === i)
        console.log(i);
}

function palindrom(num)
{
    let sum=0;
    let newno =0 ;
    while(num>0)
    {
        let digit = (num%10);
        num = Math.floor(num/10)
        newno = newno*10 + digit
    }
    return newno;
}
