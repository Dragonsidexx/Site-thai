const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Função para validar username e password
function validateCredentials(username, password) {
  // Aqui você pode implementar a lógica de validação desejada
  // Por exemplo, validar contra um conjunto de valores pré-definidos
  // ou fazer uma chamada para um servidor para verificar as credenciais.
  
  // Para este exemplo, estamos simplesmente verificando se os campos não estão vazios
  if (username.trim() === '' || password.trim() === '') {
    return false;
  }
  
  // Simulação de uma validação bem-sucedida
  return true;
}

// Função para redirecionar para página de dashboard
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
    // Exibindo uma mensagem de erro para o usuário
    alert('Credenciais inválidas. Por favor, tente novamente.');
  }
});
