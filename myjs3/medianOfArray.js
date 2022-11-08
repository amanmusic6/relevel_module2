let arr1 = [2,5,7,9,23];
let arr2 = [1,4,5,8,18,28];
// result = [1,2,4,5,5,7,8,9,18,23,28]

function fun(arr1,arr2){
    let i=0,j=0,k=0;
    let arr = [];
    let totalLen = arr1.length+arr2.length;
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
    if(arr.length%2==0){
        console.log((arr[(length/2)-1]+arr[(length/2)])/2);
    }
    else{
        console.log(arr[Math.floor(arr.length/2)]);
    }
}
fun(arr1,arr2);

