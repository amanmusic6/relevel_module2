var isPalindrome = function(x) {
    let flag =1;
    let len = x.length;
    for(let i=0;i<len/2;i++){
        if(x[i]===x[len-i-1])
            flag=1;
        else{
            flag = 0;
            return false;
        }
    }
    if(flag ===1) return true
};

console.log(isPalindrome("ab"));