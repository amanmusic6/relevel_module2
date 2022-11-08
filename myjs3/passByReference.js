// when modifing the property of copied object the original object also get changed  

// mutation and assognment.. in case of assignment address will change but in case of mutation address will not change.


let princeHome = {value: "kohinur"}

function stealKohinoor(lily){
    lily.value = "koyla"
    console.log(lily.value);
}

stealKohinoor(princeHome)
console.log(princeHome.value);
