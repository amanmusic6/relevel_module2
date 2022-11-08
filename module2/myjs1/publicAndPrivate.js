//private field must be declated first

class Father{
    #age
    constructor(age,name){
        this.#age = age;
        this.name = name;
    }
}

let obj1 = new Father(37,"myur");
console.log(obj1.age);