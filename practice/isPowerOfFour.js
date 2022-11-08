let n=24;
var isPowerOfFour = function(n) {
    if(Number.isInteger(Math.log(n)/Math.log(4)))
        return true;
    else
        return false
};
console.log(isPowerOfFour(n));