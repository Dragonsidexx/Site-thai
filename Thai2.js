window.onload = function() {
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
            showModal('Então fecha os olhos conta até 15 e depois olha para mim');
            document.getElementById('response').textContent = answer;
            document.getElementById('responseContainer').style.display = 'block';
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
