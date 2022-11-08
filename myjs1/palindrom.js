let num = 151;
let temp = num;
let newno =0 ;
while(num>0)
{
    let digit = (num%10);
    num = Math.floor(num/10)
    newno = newno*10 + digit
}
if(temp === newno)
    window.alert("True")
else 
    window.alert("False")