const errorMessages = {
    email: {
        required: 'Please enter a valid e-mail address.',
        type: "Valid format is 'example@email.com'",
        pattern: "Please enter a valid email address in the format 'example@email.com'."
    },

    country: {
        required: 'Please select a country.'
    },

    zip: {
        required: 'Please enter a valid zip-code.',
        pattern: 'Zip code must be up to 10 alphanumeric characters and may include spaces and/or a hyphen.'
    },

    password1: {
        required: 'Please set up a password between 8 and 20 characters.',
        pattern: 'Password must be 8-20 characters long and can include uppercase, lowercase letters, numbers, and special characters (#?!@$%^&*-).',
        length: 'Please enter within 8 to 20 characters.'
    },

    password2: {
        required: 'Please re-enter your password for confirmation.',
        mismatch: 'Passwords do not match. Please try again.'
    }
};

function getMatchingErrorMsg(controlEl, msgObj) {
    const errMessageArr = [];
    if (controlEl.validity.valueMissing) {
        errMessageArr.push(msgObj.required);
    }
    if (controlEl.validity.typeMismatch) {
        errMessageArr.push(msgObj.type);
    }
    if (controlEl.validity.patternMismatch) {
        errMessageArr.push(msgObj.pattern);
    }
    if (controlEl.validity.tooShort || controlEl.validity.tooLong) {
        errMessageArr.push(msgObj.length);
    }
    if (controlEl.dataset.password == 'invalid') {
        errMessageArr.push(msgObj.mismatch);
    }
    return errMessageArr;
}

function displayError(controlElId, errMessageArr) {
    if (errMessageArr.length == 0) {
        console.warn('No err');
        return;
    }
    const errEl = document.querySelector(`${controlElId} + .err-msg`);
    errMessageArr.forEach((err) => {
        const error = document.createElement('p');
        error.textContent = err;
        errEl.appendChild(error);
    });
}

function accessErrorMessageDiv(controlElId) {
    if (!controlElId) {
        console.warn(`controlElId can not be found: ${controlElId}.`);
        return;
    }
    return document.querySelector(`${controlElId} + .err-msg`);
}
function notifyInvalidEntry(controlEl) {
    const controlElId = controlEl.id;
    const errMessageArr = getMatchingErrorMsg(controlEl, errorMessages[controlElId]);
    const errorMsgDiv = accessErrorMessageDiv(controlElId);
    emptyErrorMessage(errorMsgDiv);
    displayError(controlElId, errMessageArr);
}

function resetForm(inputArr) {
    inputArr.forEach((inputEle) => {
        inputEle.textContent = '';
    });
}

function emptyErrorMessage(errorMsgDiv) {
    while (errorMsgDiv.firstChild) {
        errorMsgDiv.removeChild(errorMsgDiv.firstChild);
    }
}
function confirmPasswordsMatch(pw2ControlEl) {
  const pw1Value = document.getElementById("pw").value;
  const pw2Value = pw2ControlEl.value;
  const isMatch = pw1Value === pw2Value;
  if (!isMatch) {
    pw2ControlEl.dataset.password = "invalid";
  } else {
    pw2ControlEl.dataset.password = "";
  }
  return isMatch;
}
function validateEntry(e) {
    e.preventDefault();
    const controlEl = e.target;
    let doPasswordsMatch = false;
    if (controlEl.id === 'cf-pw') {
        doPasswordsMatch = confirmPasswordsMatch(controlEl);
    }
    if (!controlEl.checkValidity() || !doPasswordsMatch) {
        notifyInvalidEntry(controlEl);
    }
}
const formControl = document.querySelectorAll('input');
formControl.forEach((controlEl) => {
    controlEl.addEventListener('blur', validateEntry);
    controlEl.addEventListener('input', (controlEl) => {
        const errorMessageDiv = accessErrorMessageDiv(controlEl.id);
        emptyErrorMessage(errorMessageDiv);
    });
});
