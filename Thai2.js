window.onload = function() {
    let questionAnswered = false;

    function checkAnswer() {
        const answer = document.getElementById('answer').value;
        if (answer.trim() !== '') {
            questionAnswered = true;
            document.getElementById('response').textContent = answer;
            document.getElementById('responseContainer').style.display = 'block';
           window.location.href = 'DeclraThai.html';
        } else {
            alert('Por favor, responda a pergunta antes de sair.');
        }
    }
        } else {
            alert('Por favor, responda a pergunta antes de sair.');
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
    }
}
