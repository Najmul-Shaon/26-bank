document.getElementById('login').addEventListener('click', function () {
    const emailField = document.getElementById('email-btn');
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById('password-btn');
    const password = passwordField.value;
    console.log(password);
    if (email === 'abc@gmail.com' && password === 'abc') {

        // js e etar maddhome another html page e jump kore. abar arekti way ace---------
        // = location.href ='bank.html';
        window.location.href = 'bank.html';
    }
    else {
        console.log("invalid");
    }
}
)