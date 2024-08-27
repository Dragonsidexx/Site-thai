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
        // Verifica se o email contém @ e texto após o @
        return email.includes('@') && email.split('@')[1].trim() !== '';
    }

    function validateForm() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Verifica se todos os campos estão preenchidos e se as senhas correspondem
        const isFormValid = validateEmail(email) &&
            password.length >= 8 &&
            confirmPassword === password;

        // Habilita ou desabilita o botão de envio
        submitButton.disabled = !isFormValid;

        // Atualiza o estilo dos campos
        updateFieldStyles();
    }

    // Adiciona ouvintes de evento para validar o formulário
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password !== confirmPassword) {
            // Remove o alerta para uma senha não correspondente
            alert('As senhas não correspondem.');
            return;
        }

        // Redireciona para a página filmes.html após o envio bem-sucedido
        window.location.href = 'filmes.html';
    });

    // Inicializa o estado do botão ao carregar a página
    validateForm();
});
