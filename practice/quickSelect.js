function kthSmallest(arr, k, l, r) {

    if(l > r) {
        return -1;
    }

    let pi = partition(arr, l, r);

    if(pi === k-1) {
        return arr[pi];
    } else if(pi < k-1) {
        return kthSmallest(arr, k, pi+1, r);
    } else {
        return kthSmallest(arr, k, l, pi-1);
    }
}

function swap(arr, l, i) {
    let temp = arr[l];
    arr[l] = arr[i];
    arr[i] = temp;
}

function partition(arr, l, r) {
    let pivot = arr[r];
    let i=l;

    for(let j=l;j<r;j++) {
        if(arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, r);
    return i;
}

console.log(kthSmallest([4, 9, 1, 2, 8, 0, 3], 6, 0, 6));