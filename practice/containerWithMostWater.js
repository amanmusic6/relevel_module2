let height = [1,8,6,2,5,4,8,3,7];
var maxArea = function(height) {
    let maxVol=0;
    for(let i=0;i<height.length;i++){
        let max=0;
        for(let j=0;j<height.length;j++){
            let vol=Math.min(height[i],height[j])*Math.abs(i-j)
            if(vol>max) max=vol;
        }
        if(max>maxVol) maxVol=max;
    }
    console.log(maxVol);
};
maxArea(height);