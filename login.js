// Seleção dos elementos do DOM
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

// Função para validar credenciais
function validateCredentials(username, password) {
    // Verifica se o nome de usuário e a senha não estão vazios
    return username.trim() !== '' && password.trim() !== '';
}

// Função para redirecionar para a página de dashboard
function redirectDashboard() {
    window.location.href = 'filmes.html';
}

// Manipulador do evento de submit do formulário
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

// Manipulador do evento de clique no ícone de olho
togglePassword.addEventListener('click', () => {
    // Alterna o tipo do campo de senha entre 'password' e 'text'
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Alterna o ícone de olho com base na visibilidade da senha
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈'; // Atualiza o ícone
});
