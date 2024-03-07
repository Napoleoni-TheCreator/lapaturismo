const ativar_mapa = document.getElementById("InfoHotel");
const mapa = document.getElementById("BlocoHotelInfo");
const desativar_mapa = document.getElementById("fechar-map");


ativar_mapa.onclick = function () {

    mapa.classList.add("ativo");
};

desativar_mapa.onclick = function () {

    mapa.classList.remove("ativo");

};