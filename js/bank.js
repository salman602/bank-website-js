const button = document.getElementById('login-btn');
button.addEventListener('click', function () {

    // get users user name and password 
    const userNameField = document.getElementById('user-name-field');
    const userPasswordField = document.getElementById('user-password-field');
    const userName = userNameField.value;
    const userPassword = userPasswordField.value;
    // check user name and password
    if (userName == 'salman.602' && userPassword == 'secretpassword') {
        // add another html file on button valid click
        window.location.href = 'banking.html';
    }
});

