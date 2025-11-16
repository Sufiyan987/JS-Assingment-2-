var temperature = prompt("Enter Temperature")

if (temperature <= 0) {
    console.log("Freezing Cold!");
}else if (temperature <= 15) {
    console.log("Cold Weather")
}else if (temperature < 30) {
    console.log("Pleasant Day")
}else if (temperature = 30) {
    console.log("Hot Day")
}else{
    console.log("Invalid Temperature")
}