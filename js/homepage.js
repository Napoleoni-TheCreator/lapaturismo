const header = document.getElementById('Header');

// Adiciona um listener para o evento de scroll
window.addEventListener('scroll', function () {
    // Verifica se o usuário fez scroll para baixo mais do que 50px
    if (window.scrollY > 50) {
        // Se sim, adiciona uma classe ao cabeçalho
        header.classList.add('scrolled');
    } else {
        // Se não, remove a classe
        header.classList.remove('scrolled');
    }
});

let cont = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){

    ProxImg();
},5000)

function ProxImg(){
    cont++;
    if(cont>4){
        cont = 1;
    }

    document.getElementById('radio'+cont).checked = true;


}