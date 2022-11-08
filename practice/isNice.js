let word = "A"
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
            console.log("invalid input");
            flag=false;
        }
        if(flag===false) return false;
    }
    return flag;
}
console.log(isNice("YaaAay"));

