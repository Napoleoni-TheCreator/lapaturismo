const nome = document.getElementById("nome");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const end = document.getElementById("endereco");

const mapa = document.getElementById("blox-map");
const desativar_mapa = document.getElementById("fechar-map");

let ficha1 = document.getElementById("ficha1");
ficha1.onclick = function () {
    nome.textContent = 'Nome: Moto Taxi Santa Luzia';
    email.textContent = 'Email: Não Disponível'
    tel.textContent = 'Telefone: (77) 3481-5784'
    end.textContent = 'Endereço: Rua Santa Luzia, SN, no Semáforo, Centro, Bom Jesus da Lapa – BA'
    mapa.classList.add("ativo");
};

let ficha2 = document.getElementById("ficha2");
ficha2.onclick = function () {
    nome.textContent = 'Taxista José Batista | Tele Táxi 24h';
    email.textContent = 'Email: Não Disponível'
    tel.textContent = '(77) 99122-9354 / 99948-1494'
    end.textContent = 'Endereço: Terminal Rodoviário, Centro, Bom Jesus da Lapa.'
    mapa.classList.add("ativo");
};

let ficha3 = document.getElementById("ficha3");
ficha3.onclick = function () {
    nome.textContent = 'Nome: Paulo Uber';
    email.textContent = 'E-mail: paulofigueredo095@gmail.com'
    tel.textContent = 'Telefone: (77) 99918-8133'
    end.textContent = 'Endereço: Rua Guanabara, SN, Centro, Bom Jesus da Lapa – Ba'
    mapa.classList.add("ativo");
};

let ficha4 = document.getElementById("ficha4");
ficha4.onclick = function () {
    nome.textContent = 'Nome: Transtaxi Alencar';
    email.textContent = 'Email: Não Disponível'
    tel.textContent = 'Telefones: (77) 3481 2740 / 99961 1335 / 99102 8488'
    end.textContent = 'Endereço: Rua Miguel Arcanjo de Oliveira, 240, São João, Bom Jesus da Lapa.'
    mapa.classList.add("ativo");
};

let ficha5 = document.getElementById("ficha5");
ficha5.onclick = function () {
    nome.textContent = 'Nome: Moto Táxi São Gotardo ';
    email.textContent = 'Email: Não Disponível'
    tel.textContent = 'Telefone: (77) 3481-4727'
    end.textContent = 'Endereço: Avenida Lindolfo Miranda, 317, Bom Jesus da Lapa'
    mapa.classList.add("ativo");
};

desativar_mapa.onclick = function () {

    mapa.classList.remove("ativo");

};