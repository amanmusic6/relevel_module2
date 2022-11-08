var reorderedPowerOf2 = function(n) {
    let c = counter(n);
    for (let i = 0; i < 32; i++)
        if (counter(1 << i) == c) 
            return true;
    return false;

};
function counter(N) {
    let res = 0;
    for (; N; N /= 10) 
        res += Math.pow(10, N % 10);
    return res;
}
console.log(reorderedPowerOf2(1024));