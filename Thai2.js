window.onload = function() {
    let questionAnswered = false;
    const redirectURL = 'Final.html';  // Define o URL de redirecionamento aqui

    function showModal(message) {
        const modal = document.getElementById('customAlert');
        const modalText = document.getElementById('modalText');
        modalText.textContent = message;
        modal.style.display = 'flex'; // Use 'flex' para centralizar o modal
    }

    document.querySelector('.close-button').onclick = function() {
        const modal = document.getElementById('customAlert');
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        const modal = document.getElementById('customAlert');
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    }

    function redirectToFinalPage() {
        window.location.href = 'Final.html';
    }

    function checkAnswer() {
        const answer = document.getElementById('answer').value;
        if (answer.trim() !== '') {
            questionAnswered = true;
            // Exibir a mensagem após responder a pergunta
            showModal('Agora feche os olhos e conte até 15');
            // Ocultar a resposta e o container de resposta
            document.getElementById('response').textContent = '';
            document.getElementById('responseContainer').style.display = 'none';
            // Redirecionar após um atraso
            setTimeout(redirectToFinalPage, 2000); 
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

    document.getElementById('Enviar').onclick = function(event) {
        event.preventDefault();
        checkAnswer();
    }

    const toggleVideoButton = document.getElementById('toggleVideo');
    const videoContainer = document.getElementById('videoContainer');

    // Inicialmente esconder o vídeo
    videoContainer.style.display = 'none';
    toggleVideoButton.textContent = 'Mostrar Vídeo';

    toggleVideoButton.onclick = function() {
        if (videoContainer.style.display === 'none') {
            videoContainer.style.display = 'block';
            toggleVideoButton.textContent = 'Esconder Vídeo';
        } else {
            videoContainer.style.display = 'none';
            toggleVideoButton.textContent = 'Mostrar Vídeo';
        }
    }
}
