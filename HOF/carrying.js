function findMax(input1){
        let max = input1;
        return function (input2){
            max = Math.max(max,input2)
            return function (input3){
                max = Math.max(max,input3)
                return max;
            }
        }
}

let maxNo = findMax(6)(1)(8)
console.log(maxNo);