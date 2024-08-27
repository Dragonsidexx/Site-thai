// Seleção dos elementos do DOM
const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');
const languageSwitcher = document.querySelector('.language-switcher');

// Dados de tradução
const translations = {
    pt: {
        title: 'Netflix - Entrar',
        loginTitle: 'Login',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Senha',
        loginButton: 'Entrar',
        rememberLabel: 'Lembre-se de mim',
        signupText: 'Novo por aqui? Assine agora.',
        captchaText: 'Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.',
    },
    en: {
        title: 'Netflix - Sign In',
        loginTitle: 'Login',
        emailPlaceholder: 'Email',
        passwordPlaceholder: 'Password',
        loginButton: 'Sign In',
        rememberLabel: 'Remember me',
        signupText: 'New here? Sign up now.',
        captchaText: 'This page is protected by Google reCAPTCHA to ensure you are not a robot.',
    }
};

// Função para aplicar a tradução
function applyTranslations(lang) {
    const trans = translations[lang];
    document.querySelector('#title').textContent = trans.title;
    document.querySelector('#login-title').textContent = trans.loginTitle;
    document.querySelector('#username').setAttribute('placeholder', trans.emailPlaceholder);
    document.querySelector('#password').setAttribute('placeholder', trans.passwordPlaceholder);
    document.querySelector('#login-button').textContent = trans.loginButton;
    document.querySelector('#remember-label').textContent = trans.rememberLabel;
    document.querySelector('#signup-text').innerHTML = trans.signupText;
    document.querySelector('#captcha-text').textContent = trans.captchaText;
}

// Manipuladores de eventos para trocar de idioma
document.querySelector('#portuguese-btn').addEventListener('click', () => applyTranslations('pt'));
document.querySelector('#english-btn').addEventListener('click', () => applyTranslations('en'));

// Função para validar credenciais
function validateCredentials(username, password) {
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
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈'; // Atualiza o ícone
});

// Aplicar traduções padrão
applyTranslations('pt'); // Ou 'en', dependendo do idioma padrão
