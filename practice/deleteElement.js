let nums=[3,5,4,1,9,5,2,5];
let val=5;
let k=0;
var removeElement = function(nums, val) {
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            nums[k]=nums[i];
            k++;
        }
    }
    console.log(nums.slice(0,k));
};
removeElement(nums,val);