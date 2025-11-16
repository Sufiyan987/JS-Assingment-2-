let age3 = parseInt(prompt("Enter age:"));
let membership = prompt("Enter membership (Gold/Silver/None):");
if(age3 < 18 || membership.toLowerCase() === "gold"){
    console.log("10% Discount");
}else if(age3 >= 18 && membership.toLowerCase() === "silver"){
    console.log("5% Discount");
}else if(age3 >= 18 && membership.toLowerCase() === "none"){
    console.log("No Discount");
}