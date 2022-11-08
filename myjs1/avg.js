let arr = [4,2,3,4,2]
let len = arr.length
if(len%2===0)
{
    let arr1 = arr.slice(0,len/2)
    let arr2 = arr.slice(len/2)
    let avg1 = arr1.reduce((sum,Element)=>sum+=Element)/arr1.length
    let avg2 = arr2.reduce((sum,Element)=>sum+=Element)/arr2.length
    if(avg1===avg2)  console.log("yes");
    else      console.log("No");
}
else{
    let arr1 = arr.slice(0,len/2)
    let arr2 = arr.slice(len/2)
    let avg1 = arr1.reduce((sum,Element)=>sum+=Element)/arr1.length
    let avg2 = arr2.reduce((sum,Element)=>sum+=Element)/arr2.length
    if(avg1===avg2) 
        console.log("yes");
    else
        {
            let arr1 = arr.slice(0,len/2+1)
            let arr2 = arr.slice(len/2-1)
            let avg1 = arr1.reduce((sum,Element)=>sum+=Element)/arr1.length
            let avg2 = arr2.reduce((sum,Element)=>sum+=Element)/arr2.length
            if(avg1===avg2)  console.log("yes"); 
            else             console.log("No");   
        }
}