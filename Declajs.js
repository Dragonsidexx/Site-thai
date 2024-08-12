  let questionAnswered = false;

    function showModal(message) {
        const modal = document.getElementById('customAlert');
        const modalText = document.getElementById('modalText');
        modalText.textContent = message;
        modal.style.display = 'block';
    }

    document.querySelector('.close-button').onclick = function() {
        const modal = document.getElementById('customAlert');
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        const modal = document.getElementById('customAlert');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    function checkAnswer() {
        const answer = document.getElementById('answer').value;
        if (answer.trim() !== '') {
            questionAnswered = true;
            
            // Exibir a mensagem após responder a pergunta
            showModal('Fecha os olhos, conta até 15 e olhe para mim.');
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

    document.getElementById('Enviar').onclick = function() {
        checkAnswer();
        if (questionAnswered) {
            const redirectURL = '#'; // Substitua com a URL de redirecionamento desejada
            window.location.href = redirectURL;
        }
    }
}
