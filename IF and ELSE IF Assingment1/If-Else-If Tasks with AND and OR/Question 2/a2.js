let age = parseInt(prompt("Enter age:"));
let citizenship = prompt("Enter citizenship:");
if(age >= 18 && citizenship.toLowerCase() === "india"){
    console.log("Eligible to vote");
}else if(age < 18 && citizenship.toLowerCase() === "india"){
    console.log("Not eligible to vote");
}else{
    console.log("Not eligible due to citizenship");
}