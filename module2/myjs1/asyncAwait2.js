async function fatchUser(){
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
async function concate(users){
    let result = [];
    for(let user of users){
        result.push(user.firstName + user.lastName)
    }
    return result;
}
async function display(value){
    console.log(value);
}

async function performOperation(){
    let user = await fatchUser();  // await means please wait for the promise to get rsolve
    let concated = await concate(user);
    await display(concated)
}

performOperation();