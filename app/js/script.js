const form = document.querySelector('form');

const firstNameEl = document.querySelector('#first-name')

const lastNameEl = document.querySelector('#last-name')

const emailEl = document.querySelector('#email')

const passwordEl = document.querySelector('#password')

const submit = document.querySelector('.submit')

submit.setAttribute('disabled', "")

// Base Functions

function isRequired(input) {
    input == '' ? false : true
}

function isInRange(input, min, max) {
    input < min || input > max ? false : true
}

function validName(input) {
    let regEx = /\w+/
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
        createError(firstNameEl, 'A First Name is Required.')
    }
    else if (!isInRange(firstName, 2, 25)) {
        createError(firstNameEl, 'First Name Must be Between 2 and 25 Characters')
    }
}

