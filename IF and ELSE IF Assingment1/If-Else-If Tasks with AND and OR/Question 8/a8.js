function checkLoanEligibility(salary, creditScore) {
    const minSalary = 50000;
    const minCreditScore = 700;

    if (salary >= minSalary && creditScore >= minCreditScore) {
        return "Loan Approved";
    }
    else if (salary >= minSalary || creditScore >= minCreditScore) {
        return "Loan Pending";
    }
    else {
        return "Loan Denied";
    }
}