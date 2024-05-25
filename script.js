document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Add your login logic here
    alert('Login form submitted. Email: ' + email);
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('forgotEmail').value;
    // Add your forgot password logic here
    alert('Forgot Password form submitted. Email: ' + email);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    // Add your registration logic here
    alert('Register form submitted. Name: ' + name + ', Email: ' + email);
});
