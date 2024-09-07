document.getElementById('signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('forgotPasswordForm').classList.remove('hidden');
});

document.getElementById('backToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('backToLoginFromForgot').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('forgotPasswordForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});