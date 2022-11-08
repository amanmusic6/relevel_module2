// let a = "aman";  // global scope
// function sayHello(){
//     console.log("inside function");
//     console.log(a);
// }

// sayHello();


// function sayHi(){
//     let b = "aman raj"
//     console.log(b);
// }

// sayHi();
//console.log(b);

//local scope inside a function

function fun1(){
    {
        let a = "rohit"
        console.log(a);
    }
    console.log(a);
}

fun1();
