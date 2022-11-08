let arr = [23,22,11,8,53,32,10]
/*function rev(arr){
    let len = arr.length;
    for(let i=0;i<=len/2;i++){
        let temp = arr[i];
        arr[i]=arr[len-i];
        arr[len-i]=temp;
    }
    console.log(arr);
}
rev(arr);*/
// good way
function recRev(arr){
    return arr.length<2?arr:[arr.pop()].concat(recRev(arr))
}
console.log(recRev(arr));