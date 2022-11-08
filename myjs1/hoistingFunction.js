console.log(add(1,3)); // laxical scoping
function add (x,y){
    return x+y;
}

console.log(add(1,3));

// function hoisting will not give any error for function declaration but it will give error for function expression.
