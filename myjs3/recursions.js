// //fibonacci series
function fibonacci(n, result) {
    if(n === 0 || n === 1) {
        result[n] = n;
        return n;
    }
    let value =  fibonacci(n-1, result) + 
                 fibonacci(n-2, result);
    result[n] = value;
    return value;
}
let result = [];
//fibonacci(5, result);
//console.log(result);
//...............................................
function fib(n){
    if(n==0 || n==1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}
//console.log(fib(5));
//---------------------------------------------------
//palindrom
function palindrom(str,s,e){
    if(s>e){
         return true;
    }
    else if(str.charAt(s)===str.charAt(e)){
        return palindrom(str,s+1,e-1)    
    }
    else
        return false;
}
let input = "malayzlam"
//console.log(palindrom(input,0,input.length-1));
//---------------------------------------------------------
// subSequence
 function subSeq(arr,curr,i){
    if(i===arr.length){
        console.log(curr);
        return ;
    }
    //exclude
    subSeq(arr,curr,i+1);
    //include
    curr.push(arr[i]);
    subSeq(arr,curr,i+1);
    curr.pop();
 }
 let arr = [1,2,3]
 //subSeq(arr,[],0)
 //------------------------------------------------------------
 //maze problem
 function maze(arr,r,c){
    if(r===2 || c===3){
        return;
    }
    if(r==1 && c==2){
        console.log("home");
    }
    //down
    maze(arr,r+1,c)
    //right
    maze(arr,r,c+1)
 }
 let arr1 = [2][3];
 //maze(arr1,0,0);
 //-----------------------------------------------------------------
 //generate parenthasis
 function pare(n,open,close,str){
    if(open+close===2*n)
    {
        console.log(str);
        return;
    }
    if(open<n)
    {
        pare(n,open+1,close,str+"(")
    }
    if(close<open){
        pare(n,open,close+1,str+")");
    }
    
 }
 //pare(3,0,0,"");
 //---------------------------------------------------------------------
 //pascal's triangle
 function pascal(arr){
    if(arr.length ===1){
        return arr[0];
    }
    let result = [arr.length-1]
    for(let i = 0;i<result.length;i++){
        result[i]=arr[i]+arr[i+1];
    }
    pascal(result)
 }
 console.log(pascal([1,2,3,4,5])); 
 //------------------------------------------------------------------------
 //alphabetical order
 function alpha(i,n){
    if(i>n){
        return ;
    }
    console.log(i);
    alpha(i*10,n);
    if(i%10 != 0){
        alpha(i+1,n);
    }
 }
 //alpha(1,100)
 //-------------------------------------------------------------------------
 //permutation recursively
 let perm = [];
 function permutation(str,s,e){
    if(s===e){
        console.log(str);
        return;
    }
    for(let i=s;i<=e;i++){
        permutation(swap(str,i,s),s+1,e)
    }
 }
 function swap(str,i,j){
    let strArr = str.split('');
    let temp = strArr[i];
    strArr[i]= strArr[j];
    strArr[j]= temp;
    return strArr.join('');
 }
 //permutation("abc",0,2)

