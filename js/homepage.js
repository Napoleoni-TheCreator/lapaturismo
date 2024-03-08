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

setInterval(function () {

    ProxImg();
}, 5000)

function ProxImg() {
    cont++;
    if (cont > 4) {
        cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;


}



const InputName = document.getElementById('InputName');
const textComent = document.getElementById('InputText');
const form = document.getElementById('formulario');
const ComentarioPost = document.getElementById('ComentarioPost');

form.addEventListener('submit', (event) => {

    /* vai pegar a variavel e evitar o evento padrão */
    event.preventDefault();

    /* criou a variavel P(tag de paragrafo do HTML)*/
    let p = document.createElement('p');

    p.classList = 'p-2 d-flex text-wrap flex-wrap';

    /* usar acento crase pra interpolação de variaveis */
    /*serviu pra passar no html a linha abaixo como será o comentario */
    /* &nbsp = espaço em branco*/
    p.innerHTML = `<strong>${InputName.value}: </strong> &nbsp ${textComent.value}`;

    /*adicionando o comentario na div */
    ComentarioPost.appendChild(p);

    /* reseta nome e o texto pra mandar outro comentario */
    InputName.value = '';
    textComent.value = '';

    /* Retorna pro nome para a pessoa digitar */
    InputName.focus();
});