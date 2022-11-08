/*
function Father(){} 

Father.ability = function(){
    console.log("runs fast"); 
    console.log(this);  // this will give Father object
}

Father.ability(); // we can call ability object without Father object..i.e STATIC
*/
//===================================================================
// overriding of static function is possible in js
// static block will be called at the time of class creation
// from non-static function we can access static function but reverse is not true
class Father{
    static gender = Father.provideGender();
    static isMarried;

    // static{
    //     gender = "male";
    //     this.isMarried = true
    // }

    static ability(){
        console.log("runs faster");
    }
    static provideGender(){
        return "male";
    }
}
class Child{
    static ability(){
        console.log("write fast");
    }
}
console.log(Father.gender);
//Child.ability();