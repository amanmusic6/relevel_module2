// we are able to access c which is a variable defined in parent function even after parent function execution is completed.
function sum(a,b){
    let c = a+b;
    return function(){
        console.log(c);
    }
}

let print = sum(2,4);
print();
