// miles to km

const miles = [12,32,43,43,12,4]

let res = miles.map((elements)=>Math.ceil(elements= elements*1.6))
console.log(res);

let sum = res.reduce((pv,cv)=> pv=pv+cv)
console.log(sum);