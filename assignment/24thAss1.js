let fun = ((num1,num2) =>{
    if((num1<0 && num2>0) || (num1>0 && num2<0))
    return true;
    else return false;
})

console.log(fun(-2,-5));