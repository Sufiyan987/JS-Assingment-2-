function calculateOvertime(workingHours, hourlyRate) {
    const overtimeThreshold = 40;
    const highRateThreshold = 200;

    if (workingHours <= overtimeThreshold) {
        return "No overtime";
    }

    if (hourlyRate >= highRateThreshold) {
        return "Overtime pay applicable";
    }
    else {
        return "No overtime pay";
    }
}