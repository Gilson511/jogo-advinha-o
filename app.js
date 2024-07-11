let listanumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let number = 0;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto 1.0');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function mensagemInicial(){ 
    number++;
    exibirTextoNaTela('h1', `Jogo do número secreto ${number}.0`);
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou!');
        let palavratentaviva = tentativas > 1 ? 'tentativas ': 'tentativa';
        let mensagemtentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavratentaviva}`;
        exibirTextoNaTela('p',mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');// habilita o botao novo jogo.
    }else{
        if (chute > numeroSecreto){ 
            exibirTextoNaTela('h1','Voce errou!!.');
            exibirTextoNaTela('p',`O numero secreto e menor que ${chute}`);
        }else {
            exibirTextoNaTela('h1','Voce errou!!.');
            exibirTextoNaTela('p',`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limparcampo();      
    }  
    
}

function gerarNumeroAleatorio() {

    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosNaLista = listanumerosSorteados.length;

    if (quantidadeNumerosNaLista == numeroLimite){
        listanumerosSorteados = [];
    }
    if (listanumerosSorteados.includes(numeroEscolhido)){// include busca um intem na lista.
        return gerarNumeroAleatorio();

    } else {
        listanumerosSorteados.push(numeroEscolhido);// methodo push adiciona intem ao final da lista.
        console.log(listanumerosSorteados);
        return numeroEscolhido;
    }

}



function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}
















