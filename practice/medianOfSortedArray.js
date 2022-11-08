var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(nums2).sort((a,b)=> a-b);
    let len=nums1.length;
    if(len%2==0)
        return (nums1[len/2]+nums1[(len/2)-1])/2;
    else
        return nums1[Math.floor(len/2)]
};
console.log(findMedianSortedArrays([1,3],[2,4]));
//console.log([-1,-2,4,-9,5,0].sort((a,b)=> a-b));