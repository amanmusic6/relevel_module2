let oldPass = "aman@123"
let enteredPass = "aswdfwfe"

let fun = (oldPass,enteredPass)=>{
    if(oldPass===enteredPass)
        console.log("password is correct");
    else
        console.log("invalid password");
}
fun(oldPass,enteredPass)