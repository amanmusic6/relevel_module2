function bla(x,y)
{
    return x+y;
}

console.log(bla(4,5));

//another way
let blabla = function(x,y){   //function is assigned to a variable. 
    return x+y;
}
console.log(blabla(4,7))

//sayHi
let sayHi = function(){ // also called function expression 
    console.log("Hiiii");
}

sayHi();