let arr = [10,23,-3,4,-11,-32,45,-13];
function shift(arr){
    let p1=arr.length;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            while(arr[p1]<0){
                p1--;
            }
            //swap p1 and i
            let temp = arr[p1];
            arr[p1]=arr[i];
            arr[i]=temp;
        }
    }
    return arr;
}
console.log(shift(arr));