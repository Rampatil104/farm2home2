function startSession(remember) {
    var store = remember ? localStorage : sessionStorage;
    store.setItem('farm2homeAuth', '1');
}

function setError(input, message) {
    var field = input.closest('.field') || input.closest('.terms-field');
    var error = field.querySelector('.field-error');
    if (message) {
        field.classList.add('invalid');
        error.textContent = message;
        input.setAttribute('aria-invalid', 'true');
    } else {
        field.classList.remove('invalid');
        error.textContent = '';
        input.removeAttribute('aria-invalid');
    }
    return !message;
}

function clearOnInput(form) {
    form.querySelectorAll('input').forEach(function (input) {
        var eventName = input.type === 'checkbox' ? 'change' : 'input';
        input.addEventListener(eventName, function () {
            setError(input, '');
        });
    });
}

document.querySelectorAll('.toggle-pass').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var input = document.getElementById(btn.dataset.target);
        var show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.classList.toggle('shown', show);
        btn.setAttribute('aria-pressed', show);
        btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
});

var forgot = document.getElementById('forgotLink');
if (forgot) {
    forgot.addEventListener('click', function (e) {
        e.preventDefault();
    });
}

var loginForm = document.getElementById('loginForm');
if (loginForm) {
    var loginId = document.getElementById('loginId');
    var loginPass = document.getElementById('loginPassword');
    clearOnInput(loginForm);

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var okId = setError(loginId, loginId.value.trim() ? '' : 'Enter your email or mobile number.');
        var okPass = setError(loginPass, loginPass.value ? '' : 'Enter your password.');
        if (!okId || !okPass) return;
        startSession(document.getElementById('remember').checked);
        window.location.href = 'index.html';
    });

    document.getElementById('guestBtn').addEventListener('click', function () {
        startSession(false);
        window.location.href = 'index.html';
    });
}

var signupForm = document.getElementById('signupForm');
if (signupForm) {
    var fullName = document.getElementById('fullName');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var password = document.getElementById('password');
    var confirm = document.getElementById('confirmPassword');
    var terms = document.getElementById('terms');
    clearOnInput(signupForm);

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var results = [
            setError(fullName, fullName.value.trim() ? '' : 'Enter your full name.'),
            setError(email, email.value.trim() ? '' : 'Enter your email.'),
            setError(mobile, mobile.value.trim() ? '' : 'Enter your mobile number.'),
            setError(password, password.value ? '' : 'Create a password.'),
            setError(
                confirm,
                !confirm.value
                    ? 'Confirm your password.'
                    : confirm.value !== password.value
                        ? 'Passwords do not match.'
                        : ''
            ),
            setError(terms, terms.checked ? '' : 'Please accept the terms and conditions to continue.')
        ];
        if (results.indexOf(false) !== -1) return;
        startSession(false);
        window.location.href = 'index.html';
    });
}
