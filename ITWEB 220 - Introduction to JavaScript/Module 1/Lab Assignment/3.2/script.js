// Your solution goes here 
function isStrongPassword(input) {

    if (input.length < 8) {
        return false;
    }
    else if (input.includes("password")) {
        return false;
        }
    else if (!/[A-Z]/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

isStrongPassword("");