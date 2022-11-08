const numbers = [5,4,3];

const sub = numbers.reduce((total,num,index)=>{
    console.log(total,num,index);
    return total + num;
});// defalut value is 0 not 10

