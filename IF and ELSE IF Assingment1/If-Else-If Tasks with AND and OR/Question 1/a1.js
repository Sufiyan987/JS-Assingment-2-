let num = parseInt(prompt("Enter a number:"));
if(num % 2 === 0 && num > 0){
    console.log("Even and Positive number");
}else if(num % 2 === 0 && num < 0){
    console.log("Even but Negative number");
}else if(num % 2 !== 0){
    console.log("Odd number");
}