let arr = [1,3,2,18,4,2]

let result = arr.filter(function(element){
    return element%2===0;
})

//console.log(result);

// let result = arr.filter(fun(element))

// function (element){
//     return element%2===2;
// }
// console.log(result);

// MAP

let mapResult = arr.map(function(element){
    return element*element;
})
//console.log(mapResult);

// square of only even elements

let evenSqr = arr.filter(function(element){return element%2===0}).map(function(ele){return ele*ele})
//console.log(evenSqr);

//FOREACH
// difference between forEach and map is map can return something but forEach can't return anything.
arr.forEach(function(element,index){
    // if(index===2)
    //     arr[index]=undefined
})
//console.log(arr); // change in original array using foreach.....pass by reference

let forE = arr.forEach(element => {
    //console.log(element);
});

//SORT

let sortedArr = arr.sort(function(a,b){
    return b-a;
})
//console.log(sortedArr);

// if a want 1 always at last in asc and des

let customSort = arr.sort(function(a,b){
    if(a===1)
        return 1;
    // if(b===1)
    //     return -1;
    return a-b;
})
//console.log(customSort);

//console.log(arr.sort()); // dictionary order

// REDUCE

let sum =arr.reduce(function(sum,element){
    return sum+=element
},10)
console.log(sum);

