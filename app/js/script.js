const form = document.querySelector('form');

const firstNameEl = document.querySelector('#first-name')

const lastNameEl = document.querySelector('#last-name')

const emailEl = document.querySelector('#email')

const passwordEl = document.querySelector('#password')

const submit = document.querySelector('.submit')

submit.setAttribute('disabled', "")

// Base Functions

function isRequired(input) {
    if (input === ''){
        return false
    }
    else{
        return true
    }
}

function isInRange(input, min, max) {
    if(input.length < min || input.length > max) { 
        return false
     }
     else{
        return true
     }
}

function validName(input) {
    let regEx = /[A-Za-z]+/
    return regEx.test(input)
}

function validEmail(input) {
    let regEx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return regEx.test(input);
}

function strongPassword(input) {
    let regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    return regEx.test(input);
}

// Error functions

function createError(element, message) {
    const formItem = element.parentElement;

    const input = formItem.querySelector('input');

    const icon = formItem.querySelector('img');

    const errorText = formItem.querySelector('span');

    input.classList.add('error');

    icon.classList.add('error');

    errorText.textContent = message;
}

function removeError(element) {
    const formItem = element.parentElement;

    const input = formItem.querySelector('input');

    const icon = formItem.querySelector('img');

    const errorText = formItem.querySelector('span');

    input.classList.remove('error')

    icon.classList.remove('error')

    errorText.textContent = '';
}

// Check Functions

function checkFirstName(){
    let valid = false;

    const firstName = firstNameEl.value.trim()

    if (!isRequired(firstName)){
        createError(firstNameEl, 'A First Name is required')
    }
    else if (!isInRange(firstName, 2, 25)) {
        createError(firstNameEl, 'First Name must be between 2 and 25 characters')
    }
    else if (!validName(firstName)) {
        createError(firstNameEl, 'First Name must contain only letters with no whitespace')
    }
    else{
        removeError(firstNameEl);
        valid = true;
    }
    return valid;
}

function checkLastName(){
    let valid = false;

    const lastName = lastNameEl.value.trim()

    if (!isRequired(lastName)) {
        createError(lastNameEl, 'A Last Name is required')
    }
    else if(!isInRange(lastName, 2, 25)){
        createError(lastNameEl, 'Last Name must be between 2 and 25 characters')
    }
    else if(!validName(lastName)){
        createError*(lastNameEl, 'Last Name must only contain letters with no whitespace')
    }
    else{
        removeError(lastNameEl);
        valid = true;
    }
    return valid;
}

function checkEmail(){
    let valid = false;

    const email = emailEl.value.trim()

    if(!isRequired(email)){
        createError(emailEl, 'An Email Address is required')
    }
    else if(!validEmail(email)){
        createError(emailEl, 'Email Address is not valid')
    }
    else{
        removeError(emailEl);
        valid = true;
    }
    return valid;
}

function checkPassword() {
    let valid = false;

    const password = passwordEl.value.trim()

    if(!isRequired(password)){
        createError(passwordEl, 'A Password is required')
    }
    else if(!strongPassword(password)) {
        createError(passwordEl, 'The Password must contain at least one of the following: Uppercase letter, Lowercase letter, Number, and a Special character');
    }
    else{
        removeError(passwordEl);
        valid = true;
    }
    return valid
}   


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    let isFirstNameValid = checkFirstName()
    let isLastNameValid = checkLastName()
    let isEmailValid = checkEmail()
    let isPasswordValid = checkPassword()

    let isFormValid = isFirstNameValid & isLastNameValid & isEmailValid & isPasswordValid;

    if (isFormValid) {
        submit.removeAttribute('disabled')
    }
}));




