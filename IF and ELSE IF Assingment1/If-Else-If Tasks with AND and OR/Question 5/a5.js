let password = prompt("Enter password:");
let hasUpper = /[A-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);

if(password.length >= 8 && hasUpper && hasNumber){
    console.log("Strong password");
}else if(password.length >= 8 && (!hasUpper || !hasNumber)){
    console.log("Weak password");
}else if(password.length < 8){
    console.log("Password too short");
}