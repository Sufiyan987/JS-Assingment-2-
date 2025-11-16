function checkStudentGrade(marks, attendancePercentage) {
    const marksThreshold = 75;
    const attendanceThreshold = 80;

    const passedMarks = marks >= marksThreshold;
    const passedAttendance = attendancePercentage >= attendanceThreshold;

    if (passedMarks && passedAttendance) {
        return "Good student";
    } else if (passedMarks && !passedAttendance) {
        return "Needs to improve attendance";
    } else if (!passedMarks && passedAttendance) {
        return "Needs to improve marks";
    } else {
        return "Needs improvement in both";
    }
}
