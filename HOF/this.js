// global scope variavles are object...window object
// this is used only with keys not with variables

function any(){
    this.a = 2
    console.log(this.a);
    let obj = {
        a :3,
        print: function(){
            console.log(this.a);
        }
    }
     obj.print();
}

any();
