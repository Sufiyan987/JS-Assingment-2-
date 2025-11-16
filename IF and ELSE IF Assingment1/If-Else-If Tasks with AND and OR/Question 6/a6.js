let temp = parseInt(prompt("Enter temperature:"));
if(temp < 0 || temp > 35){
    console.log("Wear heavy clothes");
}else if(temp >= 0 && temp <= 20){
    console.log("Wear a jacket");
}else if(temp > 20 && temp < 35){
    console.log("Wear light clothes");
}