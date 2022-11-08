let str="pwwkew";
/*var llengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0;
    }
    let start = 0;
    let end = 0;
    let maxLength = 0;
    const uniqueCharacters = new Set();
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
        console.log(uniqueCharacters);
    }
    console.log(maxLength);
};*/
var lengthOfLongestSubstring = function(s) {
    let lss="";
    let temp="";
    let p=0;
    let q=0;
    while(p<s.length){
        if(!(temp.includes(s.charAt(p)))){ 
            temp+=s.charAt(p);
        }
        else{
            let indx=temp.indexOf(s.charAt(p))+s.indexOf(temp);
            //temp=s[indx+1];
            p=indx+1;
        }
        if(lss.length<temp.length){
            lss=temp;
        }
        p++;
    }
    console.log(lss);
};
function llengthOfLongestSubstring(string) {
    var max = 0, current_string = "", i, char, pos;

    for (i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            // cut "dv" to "v" when you see another "d"
            current_string = current_string.substring(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    console.log(current_string);
    return max;
}
llengthOfLongestSubstring(str);