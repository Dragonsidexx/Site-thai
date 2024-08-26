// Crie os elementos <p> apenas uma vez
const nomeUsuario = document.createElement('p');
nomeUsuario.style.textAlign = 'center'; // centralizar o texto
nomeUsuario.style.fontSize = '16px'; // ajustar o tamanho da fonte
nomeUsuario.style.marginBottom = '10px'; // adicionar espaço entre as linhas
loginInfo.appendChild(nomeUsuario);

const emailUsuario = document.createElement('p');
emailUsuario.style.textAlign = 'center'; // centralizar o texto
emailUsuario.style.fontSize = '16px'; // ajustar o tamanho da fonte
loginInfo.appendChild(emailUsuario);

