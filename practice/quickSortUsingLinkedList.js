let arr = [8,4,0,0,3,5];
function quickSort(arr,l,r){
    if(l>=r)
        return;
    let pr=partition(arr,l,r);
    quickSort(arr,l,pr-1);
    quickSort(arr,pr+1,r);
}
function partition(arr,s,e){
    let pivot=arr[e];
    let i=s;
    for(let j=s;j<e;j++){
        if(arr[j]<pivot){
            swap(i,j);
            i++;
        }
    }
    swap(i,e);
    return i;
}
function swap(i,j){
    let temp=arr[j];
    arr[j]=arr[i];
    arr[i]=temp;
}
quickSort(arr,0,5);
console.log(arr);