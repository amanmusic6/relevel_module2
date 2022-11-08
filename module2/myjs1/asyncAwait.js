// async function always return promises

async function addContainer(){
    return " container added"
}

async function addSuger(){
    return " Suger added";
}

async function addTea(){
    return " Tea added";
}

async function addMilk(){
    return " Milk added";
}

// let promise =  addContainer().then((onfulfilled,onrejected)=>{
//     console.log(onfulfilled);
// })

async function makeTea(){
    let container = await addContainer();
    let milk = await addMilk();
    let suger = await addSuger();
    let tea = await addTea();
    console.log(container + milk + suger + tea);
}

makeTea();
console.log("hello");