let arr = [1,1,2,3,4,5,1];

function fun(nums){
    let mp =new Map();
    let result=[];
    nums.forEach(element => {
        if(element in mp){
            mp[element]++;
        }
        else{
            //mp.set(element,1);
            mp[element]=1;
        }
    });
    // for(const [key,value] of Object.entries(mp))
    //                 result.push(parseInt(key))
        console.log(mp.size);
}
fun(arr);
