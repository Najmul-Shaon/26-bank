document.getElementById('login').addEventListener('click', function () {
    const emailField = document.getElementById('email-btn');
    const email = emailField.value;
    const passwordField = document.getElementById('password-btn');
    const password = passwordField.value;
    if (email === 'abc@gmail.com' && password === 'abc') {

        // js e etar maddhome another html page e jump kore. abar arekti way ace---------
        // = location.href ='bank.html';
        window.location.href = 'bank.html';
    }
    else {
        alert("not matched");
    }
}
)