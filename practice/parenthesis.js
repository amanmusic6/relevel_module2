var isValid = function(s) {
    let stack=[];
    let flag=0;
    for(let i=0;i<s.length;i++){
        if(s.charAt(i)==="(" || s.charAt(i)==="{" || s.charAt(i)==="["){
            stack.push(s.charAt(i))
            flag=1;
        }
        else{
            if(s.charAt(i)==")") {
                if(stack.at(stack.length-1)=="(")
                    stack.pop()
                else  return false
            }
            if(s.charAt(i)=="}") {
                if(stack.at(stack.length-1)=="{")
                    stack.pop()
                else return false
            }
            if(s.charAt(i)=="]") {
                if(stack.at(stack.length-1)=="[")
                    stack.pop()
                else  return false
            }
            
        }
    }
    console.log(stack);
    if(stack.length===0 && flag==1)
        return true
    else
        return false
};
console.log(isValid(")(()[]"));