function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else if (age >= 16) {
        return "Soon eligible to vote";
    } else {
        return "Not eligible to vote yet";
    }
}