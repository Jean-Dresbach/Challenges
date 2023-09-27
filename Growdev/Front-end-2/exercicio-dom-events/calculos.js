/* Desenvolva aqui a rotina */

function pegarValorDoElemento(IdElemento) {
    return Number(document.getElementById(IdElemento).value);
}

function atribuiValorAoTotal(IdElemento, valor) {
    document.getElementById(IdElemento).value = valor;
}

function calcular() {
    const valorBase = pegarValorDoElemento("valor_base");
    const valorTransporte = pegarValorDoElemento("valor_transporte");
    const valorAlimentacao = pegarValorDoElemento("valor_alimentacao");
    const receitaTotal = valorBase + valorTransporte + valorAlimentacao;
    atribuiValorAoTotal("valor_receita", receitaTotal);
    const valorAutomovel = pegarValorDoElemento("valor_automovel"); 
    const faltas = pegarValorDoElemento("faltas"); 
    const descontoTotal = valorAutomovel + faltas;
    atribuiValorAoTotal("valor_descontos", descontoTotal);
    const valorTotal = receitaTotal - descontoTotal;
    atribuiValorAoTotal("valor_total", valorTotal);
}

const arrayInputs = document.getElementsByClassName("escutando");
for (const input of arrayInputs) {
    input.addEventListener("change", calcular)
}