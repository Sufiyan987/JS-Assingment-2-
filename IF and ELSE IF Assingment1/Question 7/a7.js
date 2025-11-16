
var password = prompt("Enter your Password");
var length = password ? password.length : 0;

console.log(`Input Length: ${length}`);

if (length <= 6) {
    console.log("Weak password");
}else if (length < 10) {
        console.log("Moderate password");
    } else if (length >= 10){
        console.log("Strong password");
    }
