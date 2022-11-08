 var romanToInt = function(s) {
    let romn ={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    let result=0;
    if(s.length>1){
        for(let i=0;i<s.length-1;i++){
            if(romn[s.charAt(i)] >= romn[s.charAt(i+1)]){
                result = result+romn[s.charAt(i)]
            }
            else{
                result = result + romn[s.charAt(i+1)] - romn[s.charAt(i)];
                i++;
            }
        }
        if(romn[s.charAt(s.length-2)] >= romn[s.charAt(s.length-1)])
            result = result+ romn[s.charAt(s.length-1)];
    }
    else{
        result = romn[s.charAt(0)];
    }
    console.log(result);
};
romanToInt("MCXXXI");