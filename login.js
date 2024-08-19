const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const btVoltar = document.querySelector('.btVoltar');

// Função para validar username e password
function validateCredentials(username, password) {
  // TO DO: implementar lógica de validação aqui
  // Por enquanto, apenas retorna true para simular uma validação bem-sucedida
  return true;
}

// Função para redirecionar para página de dashboard
function redirectDashboard() {
  window.location.href = 'filmes.html';
}

// Função para voltar para página anterior
function goBack() {
  window.history.back();
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
    // Você pode adicionar uma mensagem de erro aqui
  }
});

btVoltar.addEventListener('click', goBack);