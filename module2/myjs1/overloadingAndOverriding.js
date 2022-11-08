//overloading -> same name with different parameter
// there is no overloading in js

// class Printable{
//     print(value){
//         console.log(value);
//     }

//     print(value1,value2){
//         console.log(value1,value2);
//     }
// }

// let pnt = new Printable();
// pnt.print(5);

// overriding -> ***constructor can't be overriden
// super keyword is used to access parent class function,property, keys and constructor.



class Father{
    constructor(){
        console.log('hey..i am father');
    }
    fathersAbility(){
        console.log('run faster');
    }
}
class Child extends Father{
    constructor(){
        super();
        console.log('hey.. i am child');
    }
    childAbility(){
        console.log('run slower');
    }
}

let chld = new Child();
chld.childAbility(); 
chld.fathersAbility();
console.log(chld instanceof Father) ;