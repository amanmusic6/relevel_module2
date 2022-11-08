// let arr = [4,3,2,5,6,8,1,7];

// console.log(arr.slice);

let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)
//console.log(newCar);

console.log('myCar = ' + JSON.stringify(myCar))
myHonda.color = "Black"
console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))

