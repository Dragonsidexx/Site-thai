function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function enableLinks() {
    var links = document.querySelectorAll('.sidenav a.disabled');
    links.forEach(function(link) {
        link.classList.remove('disabled');
        link.classList.add('enabled');
        link.onclick = function() { return true; }; // Permitir navegação
    });
}
