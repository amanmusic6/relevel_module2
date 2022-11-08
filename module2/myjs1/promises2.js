/*
1. promise.all = 
2. promise.any = if any one of the them resolves that will be passed to next callback
                if any one is resolved then that will be passed to next callback
                if none is resolved then first rejected will be passed to callback
3. promise.race = similar to promise.any only difference is..
                whichever promise resolved or rejected first will be passed to onfullfilledof onRejected

*/


function fatchUser(){
    return [
        {
            firstName : "aman",
            lastName : "raj",
            course : "BE-5"
        },
        {
            firstName : "ravi",
            lastName : "renjan",
            course : "BE-4"
        },
        {
            firstName : "ritika",
            lastName : "singh",
            course : "BE-1"
        },
        {
            firstName : "rahul",
            lastName : "raj",
            course : "BE-2"
        }
    ]
}
function fatchUserPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(fatchUser())
        },3000)
    })
}
function fatchEmployee(){
    return [
        {
            firstName : "ritika",
            lastName : "singh",
            course : "BE-1"
        },
        {
            firstName : "rahul",
            lastName : "raj",
            course : "BE-2"
        }
    ];
}
function fatchEmployeePromise(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(fatchEmployee());
        },3000)
    })
}
function concate(users){
    let result = [];
    for(let user of users){
        result.push(user.firstName + user.lastName)
    }
    return result;
}
function display(value){
    console.log(value);
}

function performOperation(){
    Promise.all([fatchUserPromise() + fatchEmployeePromise()])
        .then((onResolve) =>{
            console.log(onResolve);
        })
}

performOperation();

/*
function performOperation(){
    let promises = new Promise(function(resolve,reject){
        setTimeout(() => {
            let user = fatchUser();
            if(!user.error){
                resolve(user);
            }
            else{
                reject("error occured")
            }
        }, 2000);
    })

    promises.then((onfulfilled)=>{
        display(onfulfilled)
    },(onRejected)=>{
        return Promise.reject(onRejected);
    }).then(onfulfilled =>{
        display(onfulfilled)
    })
    // .catch((error) =>{
    //     console.log(error + "ma");
    // })
}

performOperation();
*/