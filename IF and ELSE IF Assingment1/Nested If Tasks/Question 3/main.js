function classifyGrade(marks) {
    if (marks >= 90) {
        return "A Grade";
    }

    if (marks >= 75) {
        if (marks >= 80) {
            return "B Grade";
        } else {
            return "C Grade";
        }
    }

    return "Fail";
}