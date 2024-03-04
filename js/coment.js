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