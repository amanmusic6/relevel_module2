function Laptop(){
    this.model = "dell";
    this.type = "pc";
    this.ram = "8gb";
    this.print = () =>{
        console.log(this);
    };
    this.addCoreAndPrint = function(){
        this.core  = "octaCore";
        let prnt=()=>{
            console.log(this);
        }
        prnt();
    }
    //this.print();
}
let l1 = new Laptop();
//l1.print();
l1.addCoreAndPrint();
//console.log(l1);

//....................................................
// ***** this represent from where it is being called (for normal function)
// ***** this represent where this is defined (for arrow function)
// ** when there is no caller then GLoble object is the caller.
//console.log(this);

function printThis(){
    console.log(this);
}

//printThis(); // this will print globle because it is being called from globle space

let laptop4 = {
    model : "dell",
    print : function(){
        console.log(this);
    }
}
//laptop4.print();