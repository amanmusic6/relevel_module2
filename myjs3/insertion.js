let arr=[23,43,2,5,1];
function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let j=i-1;
        let key=arr[i]
        while(j>=0 && key<arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    console.log(arr);
}
insertion(arr); 