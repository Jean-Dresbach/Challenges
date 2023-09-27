// ---------------------------- Atividade 1 ----------------------------

// const degreesCelsius = Number(prompt("Digite a temperatura em graus Celsius:"));

// const tranformFahrenheit = ((degreesCelsius * 1.8) + 32).toFixed(2);

// document.write(`<p>O valor correspondente em graus Fahrenheit é ${tranformFahrenheit}.</p>`);



// ---------------------------- Atividade 2 ----------------------------

// const dayNumber = Number(prompt("Digite um número de 1 à 7:"));

// switch (dayNumber) {
//     case 1:
//         document.write(`<p>O dia correspondente é Domingo!</p>`)
//         break;

//     case 2:
//         document.write(`<p>O dia correspondente é Segunda-feira!</p>`)
//         break;

//     case 3:
//         document.write(`<p>O dia correspondente é Terça-feira!</p>`)
//         break;

//     case 4:
//         document.write(`<p>O dia correspondente é Quarta-feira!</p>`)
//         break;

//     case 5:
//         document.write(`<p>O dia correspondente é Quinta-feira!</p>`)
//         break;

//     case 6:
//         document.write(`<p>O dia correspondente é Sexta-feira!</p>`)
//         break;
        
//     case 7:
//         document.write(`<p>O dia correspondente é Sábado!</p>`)
//         break;
        
//     default:
//         alert(`Valor inválido!`)
//         break;
// };



// ---------------------------- Atividade 3 ----------------------------

// const number = Number(prompt("Digite um número:"));

// if(number < 0) {
//     document.write(`<p>O número é negativo.</p>`);
// } else if(number > 0) {
//     document.write(`<p>O número é positivo.</p>`);
// } else {
//     document.write(`<p>O número é zero.</p>`);
// };



// ---------------------------- Atividade 4 ----------------------------

// const distributorPercentage = 0.28;
// const taxPercentage = 0.45;
// const newCarFactoryValue = Number(prompt("Digite o valor do custo de fábrica do carro:"));
// const distributionValue = Number((newCarFactoryValue * distributorPercentage).toFixed(2));
// const taxValue = Number((newCarFactoryValue * taxPercentage).toFixed(2));
// const carFinalCost = (newCarFactoryValue + distributionValue + taxValue).toFixed(2);

// document.write(`<p>O valor final do carro é de R$${carFinalCost}.</p><p>O valor da distribuição é de R$${distributionValue}.</p><p>O valor de impostos é de R$${taxValue}</p>`);



// ---------------------------- Atividade 5 ----------------------------

// const height = Number(prompt("Digite o sua altura em metros:"));
// const weight = Number(prompt("Digite o seu peso em kg:"));
// const imc = Number((weight / (height ** 2)).toFixed(2));

// if(imc < 18.5) {
//     document.write(`<p>Seu IMC é ${imc}kg/m².</p><p>Status: você está abaixo da faixa de peso ideal.</p>`);
// } else if(imc > 24.99) {
//     document.write(`<p>Seu IMC é ${imc}kg/m².</p><p>Status: você está acima da faixa de peso ideal.</p>`);
// } else {
//     document.write(`<p>Seu IMC é ${imc}kg/m².</p><p>Status: você está dentro da faixa
//     de peso ideal.</p>`);
// };



// ---------------------------- Atividade 6 ----------------------------

// const number1 = Number(prompt("Digite um número:"));
// const number2 = Number(prompt("Digite outro número:"));
// const mathOperation = parseInt(prompt("Digite o número da operação desejada: 1-Adição; 2-Subtração; 3-Multiplicação; 4-Divisão; 5-Resto da divisão ou 6-Exponenciação."));
// let result;

// switch (mathOperation) {
//     case 1:
//         document.write(`<p>O resultado da adição entre ${number1} e ${number2} é ${result = number1 + number2}.</p>`);
//         break;
    
//     case 2:
//         document.write(`<p>O resultado da subtração entre ${number1} e ${number2} é ${result = number1 - number2}.</p>`);
//         break;

//     case 3:
//         document.write(`<p>O resultado da multiplicação entre ${number1} e ${number2} é ${result = number1 * number2}.</p>`);
//         break;

//     case 4:
//         document.write(`<p>O resultado da divisão entre ${number1} e ${number2} é ${result = number1 / number2}.</p>`);
//         break;

//     case 5:
//         document.write(`<p>O resultado do resto da divisão entre ${number1} e ${number2} é ${result = number1 % number2}.</p>`);
//         break; 
    
//     case 6:
//         document.write(`<p>O resultado da exponenciação entre ${number1} e ${number2} é ${result = number1 ** number2}.</p>`);
//         break;

//     default:
//         alert(`Valor inválido! Por favor, digite um dos números relacionados a uma operação matemática.`);
//         break;
// }



// ---------------------------- Atividade 7 ----------------------------

// let balance = Number(prompt("Digite seu saldo bancário:"));
// const withdrawalFee = 4.5;

// if(balance > 0){
//     const draft = Number(prompt("Digite o valor do saque:"));
//     if(draft > 0 && draft %5 === 0){
//         if(draft + withdrawalFee <= balance) {
//             balance = (balance - (draft + withdrawalFee)).toFixed(2);
//             document.write(`<p>Saldo disponível: R$${balance}.</p>`);
//         } else {
//             document.write(`<p>Saldo insuficiente!</p>`);
//         }
//     } else {
//         document.write(`<p>Valor de saque inválido! Por favor, digite um valor de saque maior que zero e multiplo de cinco.</p>`);
//     }
// } else {
//     document.write(`<p>Valor de saldo inválido.</p>`);
// };



// ---------------------------- Atividade 8 ----------------------------

// const age = parseInt(prompt("Digite a idade do atleta:"));
// const weight = Number(prompt("Digite o peso do atleta (em kg):"));

// if (age <= 12) {
//     document.write(`<p>Categoria: Infantil.</p>`);
// } else if(age > 12 && age < 17) {
//     if(weight <= 40){
//         document.write(`<p>Categoria: Juvenil leve.</p>`);
//     } else {
//         document.write(`<p>Categoria: Juvenil pesado.</p>`);
//     }
// } else if(age > 16 && age < 25) {
//     if(weight <= 45) {
//         document.write(`<p>Categoria: Sênior leve.</p>`);
//     } else if(weight > 45 && weight <= 60){
//         document.write(`<p>Categoria: Sênior médio.</p>`);
//     } else {
//         document.write(`<p>Categoria: Sênior pesado.</p>`);
//     }
// } else {
//     document.write(`<p>Categoria: Veterano.</p>`);
// }



// ---------------------------- Atividade 9 ----------------------------

// const carSpeed = Number(prompt("Digite a velocidade do carro:"));
// const speedLimit = 80;
// const trafficTicketValuePerKm = 5;

// if(carSpeed > speedLimit){
//     const trafficTicket= parseInt(carSpeed - speedLimit) * trafficTicketValuePerKm;
//     document.write(`<p>O carro foi multado em R$${trafficTicket}.</p>`); 
// } else {
//     document.write(`<p>O carro está dentro da velocidade permitida.</p>`);
// };