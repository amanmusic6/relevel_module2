// promises is asyncronous

function addContainer(){
   return " container added";
}

function addSuger(){
    return " Suger added";
}

function addTea(){
        return " Tea added";
}

function addMilk(){
    return " Milk added";
}

function makeTea(){
    new Promise(function(resolve,reject){
         resolve(addContainer());    // whatever function is inside resolve will return 
         // that would be passed to next 'then'.
         reject((error)=>console.log("error while making tea",error))
         // if there is any error inside resolve it will be passed to resolve and
         // whatever is returned from reject will be passed to onRejected
    }).then((onFulfilled,onRejected)=>{
        if(!onRejected)
            return onFulfilled + addMilk();
    }).then((onFulfilled,onRejected)=>{
        if(!onRejected)
            return onFulfilled + addTea();
    }).then((onFulfilled,onRejected)=>{
        console.log(onFulfilled);
    })
}

makeTea();
console.log("bye");