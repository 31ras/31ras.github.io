function verify() {
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const result = document.getElementById("result");
    
    if (password === confirmPassword) {
        result.innerText = "Passwords Match!";
        result.style.color = "green";
    } else {
        result.innerText = "Passwords Do Not Match";
        result.style.color = "red";
    }
}

function gratification() {
    document.getElementById("message").innerHTML = "Welcome to the club!";
}