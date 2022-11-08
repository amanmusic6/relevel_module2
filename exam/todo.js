const myTask = {
    name: "",
    id:0,
    isDone: false
}
let todoApp = {
    todos: [], // store task in this array, to use todos array inside below functions use this.todos
    count: 0, // you can use it to get unique id for each task, feel free to use your own unique identifier implementation. You can simply use this.count value as id for any task and increment it and use its incremented value for some other task

    addTask(task){
        // use this.todos to access above declared array inside functions
        // this method adds task
        let tsk = Object.create(myTask)
        tsk.id=count++;
        tsk.name =task;
        this.todos.push(tsk);
        console.log(task + "Task added");
    },
    deleteTask(id) {
        //this method deletes task
        let flag=false;
        for(let i=0;i<this.todos.length;i++){
            if(todos[i].id===id){
                this.todos.splice(i,1);
                flag = true;
            }
        }
        if(flag==false)
            console.log("No tasks available. Please add task first!");
        else
        console.log("task deleted");
    },

    updateTaskText(id, text) {
        // this method updates task’s text
        for(let i=0;i<this.todos.length;i++){
            if(todos[i].id===id){
                this.todos.name = text;
            }
        }
        console.log("task updated");
    },

    updateTaskAsDone(id) {
        //this method updates task as done
        if(this.todos.length>0)
        {
            for(let i=0;i<this.todos.length;i++){
                if(todos[i].id===id){
                    this.todos.isDone = true;
                }
            }
            console.log("task updated as done");
    }
    else{
        console.log("No tasks available. Please add task first!");}

    },

    getAllTasks() {
        //this method prints all tasks
        if(this.todos.length>0)
            return this.todos;
        else{
            console.log("No tasks added!");
        }
    }
}
let obj= todoApp.addTask("go for sleep")
//console.log(obj);