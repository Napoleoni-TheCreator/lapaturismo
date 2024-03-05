const ativar_mapa = document.getElementById("abrir-map");
const mapa = document.getElementById("blox-map");
const desativar_mapa = document.getElementById("fechar-map");


ativar_mapa.onclick = function() {

    mapa.classList.add("ativo");
};

desativar_mapa.onclick = function() {

    mapa.classList.remove("ativo");

};