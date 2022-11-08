var kthLargestNumber = function(nums, k) {
    nums=nums.map(element=>parseInt(element))
    mergeSort(nums,0,nums.length-1)
    nums=nums.map(element=>element.toString())
    console.log(nums);
};
function mergeSort(arr,l,r){
    let mid;
    if(l>=r){
		return;//returns recursively
	}
        mid=Math.floor((l+r)/2)
        mergeSort(arr,l,mid)
        mergeSort(arr,mid+1,r)
        merge(arr,l,mid,r)
}
function merge(arr,l,mid,r){
    let len1 = mid-l+1;
    let len2 = r-mid
    let arr1 = new Array(len1);
    let arr2 = new Array(len2);
    for(let i=0;i<len1;i++){
        arr1[i]=arr[l+i];
    }
    for(let j=0;j<len2;j++){
        arr2[j]=arr[j+mid+1];
    }
    let i=0,j=0,k=l;
    while(i<len1 && j<len2){
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
    while(i<len1){
        arr[k]=arr1[i];
        k++;
        i++;
    }
    while(j<len2){
        arr[k]=arr2[j];
        k++;
        j++;
    }
}
let nums = ["3","6","7","10"]
kthLargestNumber(nums,4)