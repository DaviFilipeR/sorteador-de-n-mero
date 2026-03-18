function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("de").value);
    let numeroMaximo = parseInt(document.getElementById("ate").value);

    if (numeroMinimo >= numeroMaximo) {
        alert("O número mínimo deve ser menor que o número máximo.")
        return;
    }else{
    let sorteados = [];
    let valores;

        if (quantidadeDeNumeros >= numeroMaximo - numeroMinimo + 1) {
        alert("A quantidade de números desejada não pode ser obtida nesse intervalo.");
        return;
    }else{

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        valores = obterNumeroAleatorio(numeroMinimo, numeroMaximo);

        while (sorteados.includes(valores)) {
            valores = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
        }
        sorteados.push(valores);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarSatusBotao();
}}

    function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    }

function alterarSatusBotao() {
   let botao = document.getElementById("btn-reiniciar");
   if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
   }else{
    botao.classList.remove("container__botao");
     botao.classList.add("container__botao-desabilitado");
   }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    alterarSatusBotao();
}