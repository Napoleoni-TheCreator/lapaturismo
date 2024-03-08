
const Blocomap = document.getElementById("BlocoHotelInfo");
const desativar_mapa = document.getElementById("fechar-map");
const mapa = document.getElementById("Mapa")

/* HOTEL POUSADA DA LAPA */

let ativar_1 = document.getElementById("InfoHotel1");
ativar_1.onclick = function () {


    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15533.683519250813!2d-43.4125748!3d-13.2616186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c741893164597%3A0x8c4c2112772187e8!2sHotel%20Pousada%20da%20Lapa!5e0!3m2!1spt-BR!2sbr!4v1709938538803!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    Blocomap.classList.add("ativo");

};



/* HOTEL GRUTA*/
let ativar_2 = document.getElementById("InfoHotel2");

ativar_2.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15533.924095804829!2d-43.4223111!3d-13.257853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c7414360948e5%3A0xc9431712cfaed707!2sHotel%20Grutta!5e0!3m2!1spt-BR!2sbr!4v1709935039802!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};



/* LAPA HOTEL */
let ativar_3 = document.getElementById("InfoHotel3");

ativar_3.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.52048856809!2d-43.421440323999256!3d-13.255381565582258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c7410fd10204d%3A0x96d464fdad5456d5!2sLapa%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1709939139836!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};
/* HOTEL PALACE */
let ativar_4 = document.getElementById("InfoHotel4");

ativar_4.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.534567670154!2d-43.42049692399932!3d-13.25449976556401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c7808cfc649ad%3A0x1767fe7864b19da0!2sPalace%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1709938905776!5m2!1spt-BR!2sbr"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};
/* CENTER PRIME HOTEL */
let ativar_5 = document.getElementById("InfoHotel5");

ativar_5.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.5262397481274!2d-43.42015152399954!3d-13.255021365574873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c751151c6ac19%3A0xad73f1b33d5a7945!2sCenter%20Prime%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1709939351283!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};


/* HOTEL DALLAS TORIBIO */

let ativar_6 = document.getElementById("InfoHotel6");

ativar_6.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.4831484685133!2d-43.423774023999506!3d-13.257719965630233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c75c91a20edf5%3A0x2d370372da3ab054!2sHotel%20Dallas%20Tor%C3%ADbio!5e0!3m2!1spt-BR!2sbr!4v1709939448787!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};


/* HOTEL DALLAS YPIRANGA */


let ativar_7 = document.getElementById("InfoHotel7");

ativar_7.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.534867826977!2d-43.42212462399954!3d-13.254480965563712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c7411b1bf11cd%3A0x31c2d5f2ff989103!2sHotel%20Dallas!5e0!3m2!1spt-BR!2sbr!4v1709939487884!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};


/* HOTEL GLORIA */

let ativar_8 = document.getElementById("InfoHotel8");

ativar_8.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.505856056609!2d-43.42149432399942!3d-13.256297965601025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c7411272a9d43%3A0x56e8b69235f85b89!2sHotel%20Gl%C3%B3ria!5e0!3m2!1spt-BR!2sbr!4v1709939597095!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};

/* HOTEL ALGAROBA */

let ativar_9 = document.getElementById("InfoHotel9");

ativar_9.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.5554595026774!2d-43.419461423999564!3d-13.25319116553712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c757c9826bac9%3A0x617690aa092163b2!2sHotel%20Algaroba%20anexo!5e0!3m2!1spt-BR!2sbr!4v1709939629326!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};


/* HOTEL POUSADA JARDIM */


let ativar_10 = document.getElementById("InfoHotel10");

ativar_10.onclick = function () {
    Blocomap.classList.add("ativo");

    mapa.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4892.288331819173!2d-43.403674293729985!3d-13.28719838305868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75c75b3a28a8a91%3A0xc194892f3dfd2e90!2sCh%C3%A1cara%20e%20Pousada%20Jardim%20da%20Lagoa%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1709939806197!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


};

desativar_mapa.onclick = function () {

    Blocomap.classList.remove("ativo");

};