let input = "W E L C O M E"

let arr = Array.from(input.split(" ").join(""))
let len = arr.length;
let le=Math.floor(len/2)
for(let i=0;i<len;i++){
    if(i<le)
        console.log(String(arr.slice(le,le+i+1)));
    else
        console.log(arr.slice(le,len)+","+(arr.slice(0,i-le)));
}