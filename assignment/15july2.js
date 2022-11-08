let arr = [{id: 4,
            name:"aman"},
           {id:9,
            name:"rohan"},
           {id:12,
            name:"sohan"},
           {id:5,
            nama:"mohan"}];
let sortedArr = arr.sort((a,b)=>a.id-b.id)
console.log(sortedArr);