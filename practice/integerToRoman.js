/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let result="";
    let thausand = parseInt(num/1000);
    num%=1000;
    let hundred = parseInt(num/100);
    num%=100;
    let tens = parseInt(num/10);
    num%=10;
    let ones = num;

    let M= ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    result+=M[thausand];
    result+=C[hundred];
    result+=X[tens];
    result+=I[ones];

    return result;
};
intToRoman(999);