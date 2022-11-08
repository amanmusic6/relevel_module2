let num = 123;
// output = 123,132,213,231,321,312
function generateNum(digits,(curr_num * 10)+digits[0],[]){

    generateNum(digits,(curr_num*10)+digits[i],[]);
}
generateNum([1,2,3],0,[]);