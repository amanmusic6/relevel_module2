let arr =[1,4,5,4,5,4,2];
function fun(arr){
    arr.sort((a,b)=>a-b);
    let mp={};
    arr.forEach(element => {
        if(element in mp){
            mp[element]++;
        }
        else{
            mp[element]=1;
        }
    });
}
fun(arr);
./