// java/c++ is oop language but JS is not oop language because in js we can run our program without object also



// class is also a way to create an object...class is blueprint of an object

// class Laptop{
//     make;   // we can skip let,const here
//     model;
//     ram;

//     constructor(make,model,ram){
//         this.make=make;
//         this.model = model;
//         this.ram = ram;
//     }

//     print(){
//         console.log(this);
//     }
// }

//let laptop1 = new Laptop('dell','inspiron','8gb');
//console.log(laptop1.make);
//laptop1.print();

//------------------------------------------------------

// class Rectangle{
//     height;
//     width;

//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }
//     set Area(areaSize){
//         console.log(areaSize);
//     }
//     get Area(){
//         return this.calculateArea();
//         //return this.Area;
//     }
//     calculateArea(){
//         return this.height*this.width;
//     }
// }

// let rec = new Rectangle(4,5);
// rec.Area=22;
// console.log(rec.Area);

//---------------------------------------------------------------
// grt and set are not property of a class.
class Shape{
    area;
    parameter;
    type;

    set radius(value){
        this.type="circle";
        this.calculateAndSetArea(value)
    }
    set lengthAndWidth(value){
        this.type="rectangle";
        this.calculateAndSetArea(value)
    }

    calculateAndSetArea(value){
        if(this.type==="circle"){
            this.area = Math.PI * value * value;
        }
        else{
            this.area = value[0]*value[1];
        }
    }
}
let shape1 = new Shape();
shape1.radius=2;
console.log(shape1.area);