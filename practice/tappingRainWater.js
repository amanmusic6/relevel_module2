var trap = function(height) {
    if(height.length==0)
        return 0;
    let ans=0;
    let left=[];      //left[i] contains the maximum height of the pillar encountered before the ith pillar
    left[0]=height[0];
    let right=[];      //righ[i] contains the maximum height of the pillar encountered after the ith pillar
    right[height.length-1]=height[height.length-1];
    for(let i=1;i<height.length;i++)
    {
      left[i]=Math.max(height[i],left[i-1]);
    }
    for(let i=height.length-2;i>-1;i--)
    {
        right[i]=Math.max(height[i],right[i+1]);
    }
    for(let i=1;i<height.length-1;i++)
    {
        ans=ans+Math.min(left[i],right[i])-height[i];
    }
    return ans;
};
let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height));