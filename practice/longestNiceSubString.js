let resultLen=0;
let resultStr="";
function myfun(str){
    let arr =Array.from(str)
    subSeq(arr)
}
function subSeq(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let temp=arr.slice(i,j+1).join("")
            if(isNice(temp) && temp.length>resultLen){
                resultStr=temp;
                resultLen=temp.length;
            }
        }
}
console.log(resultStr);
}

function isNice(str){
    let flag = true;
    for(index = 0;index<str.length;index++){
        if(str.charCodeAt(index) >=97 && str.charCodeAt(index) <=122){
            if(!(str.includes(String.fromCharCode(str.charCodeAt(index)-32))))
                flag=false;
        }
        else if(str.charCodeAt(index) >=65 && str.charCodeAt(index) <=90){
            if(!(str.includes(String.fromCharCode(str.charCodeAt(index)+32))))
                flag=false;
        }
        else {
            console.log(str.charAt(index));
            flag=false;
        }
        if(flag===false) return false;
    }
    return flag;
}
myfun("B")

