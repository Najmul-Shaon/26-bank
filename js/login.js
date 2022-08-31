document.getElementById('login').addEventListener('click', function () {
    const emailField = document.getElementById('email-btn');
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById('password-btn');
    const password = passwordField.value;
    console.log(password);
    if (email === 'abc@gmail.com' && password === 'abc') {
        console.log("Valid");
    }
    else {
        console.log("invalid");
    }
}
)