function getExamEligibility(attendance) {
    if (attendance >= 75) return "Eligible for exam";
    if (attendance >= 60) return "Warning: Attend more classes";
    return "Not eligible for exam";
}