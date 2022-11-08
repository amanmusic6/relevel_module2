let heights = [1,1,4,2,1,3]
function standingRows(heights){
    let arr = heights.slice()
    heights.sort((a,b)=>a-b);
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(heights[i]!=arr[i]){
            count++;
        }
    }
    return count;
}
console.log(standingRows(heights));