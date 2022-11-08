let num1 = 20
let num2 = "20"

console.log(num1 == num2); //true but why -- only face value is checked
console.log(num1 === num2); //false === is string equality check --- js will perform thorough check...means data type is also checked

let val1 = 0
let val2 = false
console.log(val1 != val2);
console.log(val1 !== val2);