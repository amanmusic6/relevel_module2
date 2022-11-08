var longestCommonPrefix = function(strs) {
    let minLen=Number.MAX_SAFE_INTEGER;
    strs.forEach(element => {
        if(element.length<minLen)
            minLen=element.length
    });
    let result ="";
    for(let i=0;i<minLen;i++){
        let flag=true;
        for(j=0;j<strs.length-1;j++){
            if(strs[j].charAt(i) === strs[j+1].charAt(i))
                flag= true;
            else{
                flag= false;
                break;
            }
        }
        if(flag===true){
            result+=(strs[0].charAt(i));
        }
        else
            break;
    }
    return result
};
console.log(longestCommonPrefix(["cir","car"]));
