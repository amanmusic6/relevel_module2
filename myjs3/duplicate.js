let arr = [12,25,30,12,12,12,12]

let obj = {}
arr.forEach(element=>{
    if(!(element in obj))
        obj[element] = 1
    else
        obj[element]++;
})
console.log(obj);
let len=Math.ceil(arr.length/2)
for(const [key,value] of Object.entries(obj)){
    if(value>=len){
        console.log(key);
    }
}


