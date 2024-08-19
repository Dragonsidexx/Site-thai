const iniciarBtn = document.getElementById('iniciar-btn');
const btVoltar = document.querySelector('.btVoltar');
const bemVindoDiv = document.querySelector('.Bem-vindo');

// Função para redirecionar para login page
function redirectLoginPage() {
  bemVindoDiv.innerHTML = 'Redirecionando...';
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
}

// Função para voltar para página anterior
function goBack() {
  window.history.back();
}

// Adiciona eventos aos elementos
iniciarBtn.addEventListener('click', redirectLoginPage);
btVoltar.addEventListener('click', goBack);