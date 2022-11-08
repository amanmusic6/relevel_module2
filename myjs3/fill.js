//Advance way to declare a matrix
// let m = 5;
// let n = 5;

// let myName = "aman";
// console.log(Array.from(myName));

// console.log(Array.from([12,3,4,2,9,0],(e) => e+10)); //looks like map
// console.log([12,3,4,2,9,0].map((e) => e+10));

//-------------------------------------------------------
//Fill -: to fill values to the array.
//fill(value,from,to)

const fixedSizeArr = Array(5);
//console.log(fixedSizeArr);
 //console.log(fixedSizeArr.fill(100));
 //console.log(fixedSizeArr.fill(100,3));
 //console.log(fixedSizeArr.fill(100,2,4));

 //----------------------------------------------------
 //From : used for creating array instance

 const r=3, c=4;

let oneD = Array.from(Array(r).fill(2))
console.log(oneD);

 let twoDarr = Array.from(Array(r),() => Array(c).fill(100))
 console.log(twoDarr);
