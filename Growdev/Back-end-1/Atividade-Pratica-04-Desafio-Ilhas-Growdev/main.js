const stockPassword = "@1234";
let requestEmployeePassword = "";
let choice = 0;

const GC50 = 50;
const GC10 = 10;
const GC5 = 5;
const GC1 = 1;

let stockGC50 = 100;
let stockGC10 = 100;
let stockGC5 = 100;
let stockGC1 = 100;

let amountGC50used = 0;
let amountGC10used = 0;
let amountGC5used = 0;
let amountGC1used = 0;

let draft = parseInt(prompt("Digite o valor do saque:"));
while(isNaN(draft) || draft < 0) {
    alert("Valor inválido!");
    draft = parseInt(prompt("Digite o valor do saque:"));
}

while (draft > 0) {
    if(draft >= GC50 && stockGC50 > 0) {
        draft = draft - GC50;
        amountGC50used++;
        stockGC50--;
    } else if(draft >= GC10 && stockGC10 > 0) {
        draft -= GC10;
        amountGC10used++;
        stockGC10--;
    } else if(draft >= GC5 && stockGC5 > 0) {
        draft -= GC5;
        amountGC5used++;
        stockGC5--;
    } else if(draft >= GC1 && stockGC1 > 0) {
        draft -= GC1;
        amountGC1used++;
        stockGC1--;
    } else {
        if(requestEmployeePassword !== stockPassword) {
            choice = parseInt(prompt("Opa! O caixa não tem cédulas o sufiente para realizar completamente seu saque. Escolha uma das opções: 1 - Pedir e aguardar um funcionário repor o estoque de cédulas; 2 - Sacar o possível com as notas em estoque e encerrar a operação."));
        }
        if (isNaN(choice) || choice < 1 || choice > 2){
            continue;
        } else if(choice === 1) {
            if (requestEmployeePassword !== stockPassword){
                alert("Modo manutenção de estoque!");
                requestEmployeePassword = prompt("Digite a senha de acesso ao estoque:");
                for (let i = 2; i > 0 && requestEmployeePassword != stockPassword; i--) {
                    alert(`Senha incorreta! Tentativas restantes: ${i}`);
                    requestEmployeePassword = prompt("Digite a senha de acesso ao estoque:");              
                }
                if(requestEmployeePassword !== stockPassword){
                    alert("Tentativas exedidas!");
                    continue;
                }
            } else {
                let GC50stockAddition = parseInt(prompt("Digite a quantidade de notas de 50 inseridas:"));
                while (isNaN(GC50stockAddition) || GC50stockAddition < 0) {
                    alert("Valor inválido!");
                    GC50stockAddition = parseInt(prompt("Digite a quantidade de notas de 50 inseridas:"));
                }
                let GC10stockAddition = parseInt(prompt("Digite a quantidade de notas de 10 inseridas:"));
                while (isNaN(GC10stockAddition) || GC10stockAddition < 0) {
                    alert("Valor inválido!");
                    GC10stockAddition = parseInt(prompt("Digite a quantidade de notas de 10 inseridas:"));

                }
                let GC5stockAddition = parseInt(prompt("Digite a quantidade de notas de 5 inseridas:"));
                while (isNaN(GC5stockAddition) || GC5stockAddition < 0) {
                    alert("Valor inválido!");
                    GC5stockAddition = parseInt(prompt("Digite a quantidade de notas de 5 inseridas:"));
                }
                let GC1stockAddition = parseInt(prompt("Digite a quantidade de notas de 1 inseridas:"));
                while (isNaN(GC1stockAddition) || GC1stockAddition < 0) {
                    alert("Valor inválido!");
                    GC1stockAddition = parseInt(prompt("Digite a quantidade de notas de 1 inseridas:"));
                }
                stockGC50 += GC50stockAddition;
                stockGC10 += GC10stockAddition;
                stockGC5 += GC5stockAddition;
                stockGC1 += GC1stockAddition;
            }
        } else {
            draft = 0;
        }
    }
} 

let withdrawnAmount = ((GC50 * amountGC50used) + (GC10 * amountGC10used) + (GC5 * amountGC5used) + (GC1 * amountGC1used)).toFixed(2); 

document.write(`<h3>Valor sacado:</h3><p>GC$${withdrawnAmount}</p><h3>Quantidade de cédulas usadas para o saque:</h3><p>GC$50,00 = ${amountGC50used}</p><p>GC$10,00 = ${amountGC10used}</p><p>GC$5,00 = ${amountGC5used}</p><p>GC$1,00 = ${amountGC1used}</p><h3>Quantidade de cédulas no estoque:</h3><p>GC$50,00 = ${stockGC50}</p><p>GC$10,00 = ${stockGC10}</p><p>GC$5,00 = ${stockGC5}</p><p>GC$1,00 = ${stockGC1}</p>`);