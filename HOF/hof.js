// if a function takes function as an argument or if a function return a function then it is called higher order function.

function sum(a,b,display){
    let c = a+b;
    display(c);
}


function display(... c){
    console.log(c);
}

sum(2,4);
