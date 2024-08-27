// register.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('register-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const submitButton = form.querySelector('button');

    function updateFieldStyles() {
        const emailValid = validateEmail(emailInput.value);
        const passwordValid = passwordInput.value.trim().length >= 8;
        const confirmPasswordValid = confirmPasswordInput.value.trim() === passwordInput.value.trim();

        updateInputStyle(emailInput, emailValid);
        updateInputStyle(passwordInput, passwordValid);
        updateInputStyle(confirmPasswordInput, confirmPasswordValid && passwordValid);
    }

    function updateInputStyle(input, isValid) {
        if (isValid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    }

    function validateEmail(email) {
        return email.includes('@') && email.split('@')[1].trim() !== '';
    }

    function validateForm() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        const isFormValid = validateEmail(email) &&
            password.length >= 8 &&
            confirmPassword === password;

        submitButton.disabled = !isFormValid;
        updateFieldStyles();
    }

    // Adiciona ouvintes de evento para validar o formulário
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password !== confirmPassword) {
            alert('As senhas não correspondem.');
            return;
        }

        window.location.href = 'filmes.html';
    });

    // Inicializa o estado do botão ao carregar a página
    validateForm();

    // Adiciona funcionalidade ao ícone de olho
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', () => {
            const inputId = icon.getAttribute('data-input-id');
            const input = document.getElementById(inputId);
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            icon.textContent = type === 'password' ? '👁️' : '🙈'; // Atualiza o ícone
        });
    });
});
