let arr = [
    [1,1,2,2],
    [4,5,4,6],
    [6,7,8,9]
]

function maxRowUniqueElements(matrix){
    return matrix.map(function(inside){
            let uniqueElements = Object.entries(inside.reduce(function(accumulator,element){
                    if(accumulator[element]){
                        accumulator[element] = accumulator[element]+1;
                    }else{
                        accumulator[element]=1;
                    }
                    return accumulator;
            },{})).reduce(function(accumulator,pair){
                    if(pair[1]===1){
                        return accumulator+1;
                    }
            },0)
            return uniqueElements
    }).reduce(function(accumulator,element){
            return Math.max(accumulator,element);
    },Number.MIN_SAFE_INTEGER)
}

console.log(maxRowUniqueElements(arr));
!doubt/"''