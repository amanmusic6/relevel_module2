//when we wants to append something to the object without touching constructor then we use prototype.
// base class of every object.
 /*

function Father(name){
    this.name = name;
}
let father1 = new Father("ankit");
//console.log(father1);

Father.prototype.myObj = function(){
    console.log(this);  // why this is printing object?
}
Father.prototype.toString = function(){
    console.log("in father's toString");
}
//father1.myObj();
//console.log(Father.prototype);
father1.toString();

*/
//////////////////////////////////////////////////////
// function k case me agar this.kuch bhi likhte h to vo prototype k under nhi jata h.
// class k case me any function is automatically appended to the prototype


class Father{
    ability(){
        console.log("runs faster");
    }
}
class Child extends Father{
    constructor(){
        super();
        this.ability = function (){
            console.log("child's ability");
        }
    }
    ability(){
        console.log("writes faster");
    }
}
let obj = new Child();
obj.ability();
// converting class to function --> same functionality
function Father(){}
Father.prototype.ability = function(){
    console.log("runs fast");
}

function Child(){
    super();
}
Child.prototype.ability = function(){
    console.log("writes fast");
}


