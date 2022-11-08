// function sayHello(name)
// {
//     console.log("hello ", name);
//     console.log("welcome to the course")
// }

// sayHello("aman")

// function sum(x,y)
// {
//     console.log(x+y);
//     return x+y;
// }

// console.log(sum(2,3));

//find sum of odd no.
function sumOfodd(num)
{
    let sum=0;
    for(let i=0;i<num;i+=2)
        sum +=i;
    return sum;
}
console.log(sumOfodd(10));