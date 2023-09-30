var bgithub = window.document.getElementById("bgithub");
var blinkedin = window.document.getElementById("blinkedin");
bgithub.addEventListener("mouseenter",()=>{mudarbackground("var(--cor-github)")});
bgithub.addEventListener("mouseout",()=>{mudarbackground("var(--cor-padrao)")});
blinkedin.addEventListener("mouseenter",()=>{mudarbackground("var(--cor-linkedin)")});
blinkedin.addEventListener("mouseout",()=>{mudarbackground("var(--cor-padrao)")});

function mudarbackground(cor){
    var fundo = window.document.getElementById("apresentacao");
    fundo.style.backgroundColor = cor;
    fundo.style.transition = "all 0.5s";
}

/*window.onscroll = function() {
 
    btn_subir = document.getElementById("#btn-subir");

    if(window.pageYOffset > 0) {
        btn_subir.className = "show";
    }
}*/