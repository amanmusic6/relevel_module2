// function RangeIterator(start=1, end=Infinity, steps=1){
//     let latest = 0;
//     this.next = function(){
//         if(latest<=end){
//             if(latest == 0){
//                 latest = start;
//                 return latest;
//             }
//             latest += steps;
//             return latest;
//         }
//         return {done : true}
//     }
// }
// let it = new RangeIterator(1,20,2);
// while(!it.next().done){
//     console.log(it.next());
// }

/*
Generators is used to create the iterators
function* ==> this is a generator function
*/

function* RangeIterator(start = 1 , end = Infinity, steps =1){
    for(let i=start; i<=end;i+=steps){
        yield i;
    }
    return {done:true}
}

// whenever yield keyword gets encountered the execution
// of next function would be returned.

// let it = RangeIterator(1, 20, 2);
// let nextVal = it.next();
// while(!nextVal.done) {
//     console.log(nextVal.value);
//     nextVal = it.next();
// }
//................................................................
function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

 let itt = generator();
// console.log(itt.next().value); 
// console.log(itt.next().value); 
// console.log(itt.next().value); 
// console.log(itt.next().done); 

// when we'll trigger next function it'll 
// execute the generator till next yield.
// when there is no yield left then done value would be true.

// for(let item of itt){
//     console.log(item);
// }

//...............................................................................
/*
function* fibo(){
    let first = 0;
    let second = 1;
    yield first;
    yield second;
    while(true){
        let temp = first;
        first = second;
        second = temp+second;
        yield second;
    }
}

let it = fibo();
let i=0;
while(i<=5){
    console.log(it.next().value);
    i++;
}
*/
//.......................................................................................
/*
function* fibo(){
    let first = 0;
    let second = 1;
    yield first;
    yield second;
    while(true){
        let temp = first;
        first = second;
        second = temp+second;
        let reset = yield second;
        if(reset){
            first = 0;
            second = 1;
        }
    }
}

let it = fibo();
let i=0;
while(i<=5){
    console.log(it.next().value);
    i++;
}
console.log(it.next(true).value);
*/
//..........................................................................
//convert array to iterator

function* toIterator(){
    yield* ['a','b','c'];
}
let itArr = toIterator();
console.log(itArr.next().value);
console.log(itArr.next().value);
console.log(itArr.next().value);
console.log(itArr.next().done);