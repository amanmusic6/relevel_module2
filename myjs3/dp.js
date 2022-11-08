function reduceNumbers(n) {

    if(n === 0) {
        return 0;
    }
    let min = Number.MAX_SAFE_INTEGER;
    // take digit one by one and subtract it from n
    let copyOfn = n;
    while(copyOfn != 0) {
        let rem = copyOfn % 10;
        if(rem !== 0) {
            min = Math.min(min, reduceNumbers(n-rem) + 1);
        }
        copyOfn= parseInt(copyOfn/10);
    }
    return min;
}
console.log(reduceNumbers(27));