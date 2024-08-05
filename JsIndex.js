function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleLinks(enabled) {
    var links = document.querySelectorAll('.sidenav a:not(.closebtn)');
    links.forEach(function(link) {
        if (enabled) {
            link.classList.remove('disabled');
            link.onclick = function() { return true; }; // Permitir navegação
        } else {
            link.classList.add('disabled');
            link.onclick = function() { return false; }; // Impedir navegação
        }
    });
}

document.getElementById('toggleLinks').addEventListener('change', function() {
    toggleLinks(this.checked);
});
