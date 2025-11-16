function checkSpeeding(speed) {
    if (speed < 60) {
        return "Safe driving";
    } else if (speed >= 60 && speed < 80) {
        return "Warning: Speed limit approaching";
    } else {
        return "Speeding violation! Fine imposed";
    }
}