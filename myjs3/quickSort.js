let arr = [23,1,2,5,3,5];
function quickSort(arr,l,r){
    if(l>=r)
        return; 
    let part=partition(arr,l,r);
    quickSort(arr,l,part-1);
    quickSort(arr,part+1,r);
}
function partition(arr,l,r){
    let i=l;
    for(j=l;j<r;j++){
        if(arr[j] < arr[r]){
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]= temp;
            i++;
        }
    }
    let temp=arr[r];
    arr[r]=arr[i];
    arr[i]=temp;
    return i;
}
quickSort(arr);
console.log(arr);