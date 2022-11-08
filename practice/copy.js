// function mmergeSort(arr,l,r){
//     let mid = Math.floor((l+r)/2)
    
//     if(l>=r){
//         return;
//     }
//     mergeSort(arr,l,mid);
//     mergeSort(arr,mid+1,r);
//     mergeUtil(arr,l,mid,r);
// }
// function mergeUtil(arr,l,m,r){
//     let arr1 = new Array(m-l+1);
//     let arr2 = new Array(r-m);
//     // for(let i=0;i<m;i++){
//     //     arr1[i]=arr[l+i];  
//     // }
//     // for(let i=m+1; i<=r;i++){
//     //     arr2[i]=arr[m+i+1];
// 	for (let i = 0; i <arr1.length; i++)
// 		arr1[i] = arr[l + i];
// 	for (let j = 0; j <arr2.length; j++)
// 		arr2[j] = arr[m + 1 + j];
        
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

// let arr = [2,9,4,5,1,2,10,99,17];
// mergeSort(arr,0,arr.length-1)
// console.log(arr);



function merge(arr, l, m, r)
{
	// var n1 = m - l + 1;
	// var n2 = r - m;

	let arr1 = new Array(m - l + 1);
	let arr2 = new Array(r - m);
	for (let i = 0; i <arr1.length; i++)
		arr1[i] = arr[l + i];
	for (let j = 0; j <arr2.length; j++)
		arr2[j] = arr[m + 1 + j];

	let i = 0,j=0,k=1;
	while (i <arr1.length && j < arr2.length) {
		if (arr1[i] <= arr2[j]) {
			arr[k] = arr1[i];
			i++;
		}
		else {
			arr[k] = arr2[j];
			j++;
		}
		k++;
	}
	while (i < arr1.length) {
		arr[k] = arr1[i];
		i++;
		k++;
	}
	while (j <arr2.length) {
		arr[k] = arr2[j];
		j++;
		k++;
	}
}
function mergeSort(arr,l, r){
	if(l>=r){
		return;//returns recursively
	}
	//var m =l+ parseInt((r-l)/2);
	var m =Math.floor((l+r)/2)
	mergeSort(arr,l,m);
	mergeSort(arr,m+1,r);
	merge(arr,l,m,r);
}
var arrr = [2,9,4,5,1,2,10,99,17];
	var arr_size = arrr.length;
	console.log( "Given array is");
	console.log(arrr);
	mergeSort(arrr, 0, arr_size - 1);
	console.log( "Sorted array is");
	console.log(arrr);

