// function mmergeSort(arr,l,r){
//     let mid
//     if(l<r){
//     mid =l+ parseInt((r-l)/2);

//     mergeSort(arr,l,mid);
//     mergeSort(arr,mid+1,r);
//     mergeUtil(arr,l,mid,r);
//     }
// }
// function mmergeUtil(arr,l,m,r){
//     let arr1 = new Array(m-l+1);
//     let arr2 = new Array(r-m);
//     for(let i=0;i<m;i++){
//         arr1.push(arr[i]);
        
//     }
//     for(let i=m+1; i<=r;i++){
//         arr2.push(arr[i]);
        
//     }
//     let i=0,j=0;k=l;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<=arr2[j]){
//             arr[k]=arr1[i];
//             i++;
//         }
//         else{
//             arr[k]=arr2[j];
//             j++;
//         }
//         k++;
//     }
//     while(i<arr1.length){
//         arr[k] = arr1[i];
//         i++;
//         k++;
//     }
//     while(j<arr2.length){
//         arr[k]=arr2[j];
//         j++;
//         k++;
//     }
// }

function mergeSort(arr,l,r){
    let mid = Math.floor((l+r)/2)
    
    if(l>=r){
        return;
    }
    mergeSort(arr,l,mid);
    mergeSort(arr,mid+1,r);
    mergeUtil(arr,l,mid,r);
}
function mergeUtil(arr,l,m,r){
    let arr1 = new Array(m-l+1);
    let arr2 = new Array(r-m);
    for(let i=0;i<m;i++){
        arr1.push(arr[i]);
        
    }
    for(let i=m+1; i<=r;i++){
        arr2.push(arr[i]);
        
    }
    let i=0,j=0;k=l;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            arr[k]=arr1[i];
            i++;
        }
        else{
            arr[k]=arr2[j];
            j++;
        }
        k++;
    }
    while(i<arr1.length){
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while(j<arr2.length){
        arr[k]=arr2[j];
        j++;
        k++;
    }
}
let arr = [2,9,4,5,1,2,10,99,17];
mergeSort(arr,0,arr.length-1)
console.log(arr);

