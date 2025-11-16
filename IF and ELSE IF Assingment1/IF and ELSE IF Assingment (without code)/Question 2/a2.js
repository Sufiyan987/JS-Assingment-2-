var num = +prompt("Enter Number") {
    if (num === 0) {
        console.log("Zero");
    } else if (num % 2 === 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}

var year = +prompt("Enter Year") {
    if (year % 400 === 0) {
        console.log("Leap year");
    } else if (year % 4 === 0 && year % 100 !== 0) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }

}
