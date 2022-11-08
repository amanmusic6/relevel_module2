let number = 15;
console.log(primePair(number));
function primePair(number){
    for(let i = 2;i<=number/2;i++){
        if(isprime(i) && isprime(number-i))
            return [i,number-i]
    }
}

function isprime(num){
        for(let i =2;i<=Math.sqrt(num);i++)
        {
            if(num%i == 0)
                return false
        }
        return true
}
