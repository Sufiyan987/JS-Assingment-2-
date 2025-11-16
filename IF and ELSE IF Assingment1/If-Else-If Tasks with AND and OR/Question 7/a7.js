let age = parseInt(prompt("Enter age:"));
let license = prompt("Do you have a license? Yes/No:");

if(age >= 18 && license.toLowerCase() === "yes"){
    console.log("Eligible to drive");
}else if(age < 18 && license.toLowerCase() === "yes"){
    console.log("Not eligible to drive by age");
}else if(license.toLowerCase() === "no"){
    console.log("You need a license to drive");
}