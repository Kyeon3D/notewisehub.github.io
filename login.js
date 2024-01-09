function validateForm(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var validUsername = 'user';
    var validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        window.location.href = "home.html";
    } else {
        alert("Login failed. Please try again.");
    }
}

