//constructor
function Laptop(type){
    this.make = type;
    this.model  = 'Inspiron 1590';
    this.cores = 'i5';
    this.addCoreAndPrint = function(core){
        this.core = core;
        let print=()=>{
            console.log(this);
        }
        print();
    } 
    //this.addCoreAndPrint(5)    
}

const myLaptop = new Laptop('dell');
myLaptop.addCoreAndPrint(2);

//console.log(myLaptop);

//this keyword 
// const intro ={
//     name : "aman",
//     place : "bangluru",
//     getBio : function(){
//         console.log("my name is "+ this.name + " I stay in " + this.place);
//     },
//     print : function(){
//         console.log(this);
//     },
//     //this.print();
// }
// intro.print();
