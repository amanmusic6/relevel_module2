let arr2 = [[1,0,0,0],
            [0,1,0,0],
            [0,0,11,0],
            [0,0,0,4]
]

let arr = [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
]

let fun = (arr2 => {
    console.log(arr2);
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(i===j) continue;
            if(arr2[i][j] !== 0)
                return false;
        }
    }
    return true;
})

console.log(fun(arr2));