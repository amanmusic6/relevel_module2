//destructuring of an onject

let obj1 = {
    name : "aman",
    city : "gogri",
    gender : "m",
    age : 26
}

let obj2 = {...obj1} // we use triple dot for rest operator and for destructuring also

obj2.name = "rohan"
obj2.age = 20

console.log(obj1);
console.log(obj2);