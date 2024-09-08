
window.onload = function() {
    let questionAnswered = false;

    function showModal(message) {
        const modal = document.getElementById('customAlert');
        const modalText = document.getElementById('modalText');
        if (modal && modalText) {
            modalText.textContent = message;
            modal.style.display = 'block';
        } else {
            console.error('Modal or modalText element not found.');
        }
    }

    document.querySelector('.close-button').onclick = function() {
        const modal = document.getElementById('customAlert');
        if (modal) {
            modal.style.display = 'none';
        } else {
            console.error('Modal element not found.');
        }
    }

    window.onclick = function(event) {
        const modal = document.getElementById('customAlert');
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    }

    function checkAnswer() {
        const answer = document.getElementById('answer').value;
        if (answer.trim() !== '') {
            questionAnswered = true;
            // Exibir a mensagem após responder a pergunta
            showModal('Feche os olhos e conte até 15');
            // Ocultar a resposta e o container de resposta
            document.getElementById('response').textContent = '';
            document.getElementById('responseContainer').style.display = 'none';
        } else {
            showModal('Por favor, responda a pergunta antes de sair.');
        }
    }

    window.onbeforeunload = function(event) {
        if (!questionAnswered) {
            const message = 'Você ainda não respondeu a pergunta.';
            event.returnValue = message;
            return message;
        }
    }

    const enviarButton = document.getElementById('Enviar');
    if (enviarButton) {
        enviarButton.onclick = function() {
            checkAnswer();
            this.classList.add('clicked');  // Adiciona a classe 'clicked' ao botão
        };
    } else {
        console.error('Enviar button element not found.');
    }
}
