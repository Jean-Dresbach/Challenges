let nota1 = Number(prompt("Digite sua primeira nota:"));
let nota2 = Number(prompt("Digite sua segunda nota:"));;
let nota3 = Number(prompt("Digite sua terceira nota:"));;

const mediaSimples = (nota1 + nota2 + nota3) / 3;


if(mediaSimples >= 9) {
    alert("Aprovado com nota excelente!")
} else if(mediaSimples >= 7 && mediaSimples < 9) {
    alert("Aprovado com nota boa.")
} else {
    alert("Você esta de recuperação!")
    const notaRecuperacao = Number(prompt("Digite a nota da sua recuperação:"));
    if (notaRecuperacao >= 6) {
        alert("Aprovado na recuperação!")
    } else {
        alert ("Reprovado, estude e pratique mais")
    }
}