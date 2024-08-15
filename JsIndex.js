function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleLinks(enabled) {
    var links = document.querySelectorAll('.sidenav a:not(.closebtn)');
    var status = document.getElementById('linkStatus');
    
    links.forEach(function(link) {
        if (enabled) {
            link.classList.remove('disabled');
            link.classList.add('enabled');
            link.onclick = function() { return true; }; // Permitir navegação
        } else {
            link.classList.remove('enabled');
            link.classList.add('disabled');
            link.onclick = function() { return false; }; // Impedir navegação
        }
    });
    
    // Atualiza o status do parágrafo
    if (enabled) {
        status.textContent = 'Links habilitados, se precisar do JavaScript';
        status.classList.remove('disabled');
        status.classList.add('enabled');
    } else {
        status.textContent = 'Links desabilitados';
        status.classList.remove('enabled');
        status.classList.add('disabled');
    }
}

document.getElementById('toggleLinks').addEventListener('change', function() {
    toggleLinks(this.checked);
});
