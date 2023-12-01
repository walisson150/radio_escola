function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaTeclas = document.querySelectorAll('.tecla');

var contador = 0

//while (contador< listaTeclas.length) {
//    const botao = listaTeclas[contador];
//    const instrumento = botao.classList[1];
//    console.log(botao);
//   console.log(instrumento);
//    const idAudio = `#som_${instrumento}`;
//    console.log(idAudio);
//    botao.onclick = function () { tocaSom(idAudio);}
//    contador++;
//}

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    console.log(tecla);
    console.log(instrumento);
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);
    tecla.onclick = function () { tocaSom(idAudio); }
    tecla.onkeydown=function(evento){
        if (evento.code === 'Space'|| evento.code ==='Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
            tecla.classList.remove('ativa');}
    }