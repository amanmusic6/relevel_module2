const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(` Choose an Option
  1.Add a task
  2.Delete a last added task
  3.Mark the task as done - Once the task is marked done
  4.Edit the task
  5.Return all task`, ans => {
    call(ans)
    readline.close();
  });

let toDo = []
let task = {
    taskName: "task_name",
    isDone: false,
    estimatedTime:"",
    remindAt: ""
}
function createTask(name){
    let tsk = new Object(task);
    tsk.taskName = name;
    toDo.push(tsk);
    console.log(`Your task \"${tsk.taskName}\" is created`);
}
function deleteLast(){
    toDo.pop()
    console.log("your last task is deleted");
}
function markDone(tName){
    toDo.forEach(obj=>{
        if(obj.taskName === tName){
            obj.isDone = true;
        }
        console.log(`you have completed this task--${obj.name}`);
    })
}
function editTask(tName){
    toDo.forEach(obj=>{
        if(obj.taskName === tName){
            obj.remindAt = 3;
        }
        console.log(`you have edited this task--${obj.name}`);
    })
}
function allTask(){
    console.log(toDo);
}
function call(name){
    switch(name) {
        case 1:
            createTask("cook")
          break;
        case 2:
            deleteLast()
          break;
        case 3:
            markDone("cook")
            break;
        case 4:
            editTask("cook")
            break;
        case 5:
            allTask();
            break;
        default:
          console.log("invalid Input");
      }
}

