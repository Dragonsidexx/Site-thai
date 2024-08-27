const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

function validateCredentials(username, password) {
    if (username.trim() === '' || password.trim() === '') {
        return false;
    }
    return true;
}

function redirectDashboard() {
    window.location.href = 'filmes.html';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (validateCredentials(username, password)) {
        console.log(`Username: ${username}, Password: ${password}`);
        redirectDashboard();
    } else {
        console.log('Invalid credentials');
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
});

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️'; // Change icon based on visibility
});
