let age2 = parseInt(prompt("Enter age:"));
let student = prompt("Are you a student? yes/no:");
if(age2 >= 13 && age2 <= 19 && student.toLowerCase() === "yes"){
    console.log("Teenager and Student");
}else if(age2 >= 13 && age2 <= 19 && student.toLowerCase() === "no"){
    console.log("Teenager but not a Student");
}else{
    console.log("Not a Teenager");
}