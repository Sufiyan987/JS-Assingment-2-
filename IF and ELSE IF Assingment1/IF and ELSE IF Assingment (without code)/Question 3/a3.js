function login(username, password) {
    if (!username || !password) return "Please enter username and password";
    if (username === "admin" && password === "12345") return "Login successful";
    return "Invalid credentials";
}