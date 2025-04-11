let passwordInput = document.getElementById("passwordInput");
let submitBtn = document.getElementById("submitBtn");
let messageOutput = document.getElementById("messageOutput");


function validatePassword() {

    let password = passwordInput.value

    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    if (password.length < 8) {
        messageOutput.innerText= "Please enter a password of at least 8 characters";
    } else if
        (!hasUpperCase) {
        messageOutput.innerText= "Please enter at least one uppercase character";
    }

    else if
        (!hasLowerCase) {
        messageOutput.innerText= "Please enter at least one lowercase character";
    }

    else if (!hasNumber) {
        messageOutput.innerText= "Please enter at least one number";

    }
    else {
        messageOutput.innerText= "Your password is acceptable";
    }
}

submitBtn.addEventListener("click", validatePassword);