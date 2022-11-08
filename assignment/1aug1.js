let a=21 , b=45;
function gcd(a,b)
{
    if (a == 0)
       return b;
    if (b == 0)
       return a;
    if (a == b)
        return a;
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}
console.log(gcd(a,b));
console.log(`Time Complaxity is minimum of a and b`);