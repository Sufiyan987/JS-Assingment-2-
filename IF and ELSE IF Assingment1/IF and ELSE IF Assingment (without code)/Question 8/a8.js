function checkNumberRange(num) {
    if (num >= 1 && num <= 10) {
        return "Between 1 and 10";
    } else if (num >= 11 && num <= 20) {
        return "Between 11 and 20";
    } else if (num >= 21 && num <= 30) {
        return "Between 21 and 30";
    } else {
        return "Number is out of range";
    }
}