// Async programming
// -> call back 
// node.js 
//    -> libuv
//    -> call back queue
//    -> call stack
// promices and AsyncAndAwait
// setTimer and set interval
// countdown timer
//............................................................
// Synchronous means one at a time


// let's make a tea(Synchronous callBack)

function addContainer(addMilk){
    console.log("container added");
    addMilk(addSuger);
}

function addSuger(addTea){
    console.log("Suger added");
    addTea();
}

function addTea(){
    console.log("Tea added");
}

function addMilk(addSuger){
    console.log("Milk added");
    addSuger(addTea);
}

function makeTea(addContainer){
    addContainer(addMilk)
}

// this is called callBack Hell because one function is attached to other in  a order

setTimeout(()=>{
    console.log("first outside");
    setTimeout(()=>{
        console.log("first inside");
    },2000)
},2000)

setTimeout(()=>{
    console.log("second outside");
    setTimeout(()=>{
        console.log("second inside");
    },2000)
},2000)

// Promises  --> decoupling the callback (chain)