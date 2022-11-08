let arr = [12,43,52,22,64,11];

function sec(arr){
    let firstHighest = 0;
    let secHighest = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstHighest)
            firstHighest=arr[i]
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>secHighest && arr[i]<firstHighest)
            secHighest=arr[i];
    }
    return secHighest;
}
console.log(sec(arr));
uniqueArr = new Set(arr)// it will remove duplicates from arr.
console.log([...arr]);// will destructure the array