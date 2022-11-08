let fun =((x,y,z) =>{

    let c=0;
    while(x && y && z){
        x--;
        y--;
        z--;
        c++;
    }
    return c;
})
console.log(fun(5,8,13));