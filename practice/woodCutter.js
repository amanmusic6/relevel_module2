// function fun(arr,n,sum,h){
//     if(sum===n){
//         return h-arr[0];
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] >0){
//             arr[i]--;
//         }
//     }
//     let total = arr.reduce((sum,element) => sum+element)
//     return fun(arr,n,total,h);

// }
// console.log(fun([20,17,15,10],7,0,20));

function machineHeight(tree, plankLen) {
    let longLen = Math.max(...tree);
    let shortLen = 0;
    while(true) {
        let getSum = 0;
        let mid = parseInt((longLen + shortLen) / 2);

        for(let i = 0; i < tree.length; i++) {
            if(tree[i] >= mid) getSum += (tree[i] - mid);
            else getSum += 0;
        }

        if(getSum == plankLen) return mid;
        else if(getSum > plankLen) shortLen = mid;
        else longLen = mid;
    }
}

console.log(machineHeight([20, 15, 10, 17], 7));