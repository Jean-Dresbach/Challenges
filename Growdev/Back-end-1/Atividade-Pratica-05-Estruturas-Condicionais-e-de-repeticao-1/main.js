// ---------------------------- Atividade 1 ----------------------------

// Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa vai parar quando for digitada a idade 999. No final, mostre quantos alunos existem na turma e qual é a média de idade do grupo.

// RESPOSTA: 

// let age = 0;
// let students = 0;
// let avaregeAge = 0;
// let sumAges = 0;

// while (age !== 999) {
//     age = parseInt(prompt("Digite a idade de um aluno:"));
//     if(isNaN(age) || age <= 0) {
//         alert("Valor inválido!");
//         continue;
//     }
//     if(age !== 999) {
//         students++;
//         sumAges += age;
//         avaregeAge = (sumAges / students).toFixed(2);
//     }
// }

// document.write(`<p>Quantidade de alunos na turma: ${students}.</p><p>Média de idade da turma é: ${avaregeAge} anos.</p>`);



// ---------------------------- Atividade 2 ----------------------------

// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salários pagos aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

// RESPOSTA: 

// let stopProgram = 2;
// let totalManSalary = 0;
// let totalWomenSalary = 0;

// while (stopProgram === 2) {
//     let salary = Number(prompt("Digite o salário do funcionário:"));
//     if(isNaN(salary) || salary <= 0) {
//         alert("Valor de salário inválido!");
//         continue;
//     }
//     let sexChoice = parseInt(prompt("Digite o número correspondente ao sexo do funcionário: 1 - Homem ou 2 - Mulher."));
//     while (isNaN(sexChoice) || sexChoice < 1 || sexChoice > 2) {
//         alert("Valor inválido!");
//         sexChoice = parseInt(prompt("Digite o número correspondente ao sexo do funcionário: 1 - Homem ou 2 - Mulher."));
//     }

//     if(sexChoice === 1) {
//         totalManSalary += salary;
//     } else {
//         totalWomenSalary += salary;
//     }

//     stopProgram = parseInt(prompt("Deseja parar o programa? Se sim, digite 1, se não, digite 2."));
//     while(isNaN(stopProgram) || stopProgram < 1 || stopProgram > 2) {
//         alert("Valor inválido!");
//         stopProgram = parseInt(prompt("Deseja parar o programa? Se sim, digite 1, se não, digite 2."));
//     }
// }

// document.write(`<p>Total dos salários pagos aos homens: R$${(totalManSalary).toFixed(2)}.</p><p>Total dos salários pagos as mulheres: R$${(totalWomenSalary).toFixed(2)}.</p><p>Total geral de salários pagos: R$${totalManSalary + totalWomenSalary}.</p>`);



// ---------------------------- Atividade 3 ----------------------------

// Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:

// RESPOSTA: 

// let result;

// let firstValue = prompt("Digite o primeiro valor:");
// while (isNaN(firstValue)) {
//     alert("Valor inválido!");
//     firstValue = prompt("Digite o primeiro valor:");
// }

// let lastValue = prompt("Digite o último valor:");
// while(isNaN(lastValue)) {
//     alert("Valor inválido!");
//     lastValue = prompt("Digite o último valor:");
// }

// while (firstValue === lastValue) {
//     alert("Para que a contagem seja efetuada digite valores diferentes!");
//     firstValue = prompt("Digite o primeiro valor:");
//     lastValue = prompt("Digite o último valor:");
// }

// let incrementOrDecrement = prompt("Digite o valor do incremento ou decremento:");
// while(isNaN(incrementOrDecrement)) {
//     alert("Valor inválido!");
//     incrementOrDecrement = prompt("Digite o último valor:");
// }

// firstValue = Number(firstValue);
// lastValue = Number(lastValue);
// incrementOrDecrement = Number(incrementOrDecrement);


// if(firstValue < lastValue) {
//     result = "Contagem progressiva: ";
//     for (; firstValue <= lastValue; firstValue += incrementOrDecrement) {
//         result += firstValue + " ";
//     }
// } else {
//     result = "Contagem regressiva: ";
//     for (; firstValue >= lastValue; firstValue -= incrementOrDecrement) {
//         result += firstValue + " ";
//     }
// }

// document.write(`<p>${result}Acabou!</p>`);



// ---------------------------- Atividade 4 ----------------------------

// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

// RESPOSTA:

// const discountForMen = 0.05;
// const discountForWomen = 0.13;
// const NAME = prompt("Digite o nome do cliente:");

// let sexChoice = parseInt(prompt("Digite o número correspondente ao sexo do funcionário: 1 - Homem ou 2 - Mulher."));
// while (isNaN(sexChoice) || sexChoice < 1 || sexChoice > 2) {
//     alert("Valor inválido!");
//     sexChoice = parseInt(prompt("Digite o número correspondente ao sexo do funcionário: 1 - Homem ou 2 - Mulher."));
// }

// let purchaseValue = Number(prompt("Digite o valor total da compra:"));
// while (isNaN(purchaseValue) || purchaseValue <= 0)  {
//     alert("Valor inválido!");
//     purchaseValue = Number(prompt("Digite o valor total da compra:"));
// }

// if(sexChoice === 1) {
//     let purchaseValueWithDiscount = purchaseValue - (purchaseValue * discountForMen);
//     document.write(`<h3>${NAME.toUpperCase()}</h3><p>Você recebeu ${discountForMen * 100}% de desconto em sua compra de R$${(purchaseValue).toFixed(2)}!</p><p>Valor final: R$${(purchaseValueWithDiscount).toFixed(2)}</p>`);
// } else {
//     let purchaseValueWithDiscount = purchaseValue - (purchaseValue * discountForWomen);
//     document.write(`<h3>${NAME.toUpperCase()}</h3><p>Você recebeu ${discountForWomen * 100}% de desconto em sua compra de R$${(purchaseValue).toFixed(2)}!</p><p>Valor final: R$${(purchaseValueWithDiscount).toFixed(2)}</p>`);
// }



// ---------------------------- Atividade 5 ----------------------------

// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

// RESPOSTA:

// const smallTripDistance = 200;
// const smallTripCostPerKm = 0.5;
// const largeTripCostPerKm = 0.45;
// let ticketCost = 0;

// let tripDistance = parseInt(prompt("Digite a distância que você deseja viajar:"));
// while (isNaN(tripDistance) || tripDistance <= 0) {
//     alert("Valor inválido!");
//     tripDistance = parseInt(prompt("Digite a distância que você deseja viajar:"));
// }

// if(tripDistance <= smallTripDistance) {
//     ticketCost = (tripDistance * smallTripCostPerKm).toFixed(2);
//     document.write(`<p>Distância da viagem é ${tripDistance}km.</p><p>Valor pago por km: R$${(smallTripCostPerKm).toFixed(2)}.</p><p>Valor da passagem: R$${ticketCost}.</p>`);
// } else {
//     ticketCost = (tripDistance * largeTripCostPerKm).toFixed(2);
//     document.write(`<p>Distância da viagem é ${tripDistance}km.</p><p>Valor pago por km: R$${largeTripCostPerKm}.</p><p>Valor da passagem: R$${ticketCost}.</p>`);
// }



// ---------------------------- Atividade 6 ----------------------------

// Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m2. O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
// Abaixo de 100m² = TERRENO POPULAR
// Entre 100m² e 500m² = TERRENO MASTER
// Acima de 500m² = TERRENO VIP

// RESPOSTA:

// let landClass;
// let landWidth = Number(prompt("Digite a largura do terreno:"));
// while (isNaN(landWidth) || landWidth <= 0) {
//     alert("Valor inválido!");
//     landWidth = Number(prompt("Digite a largura do terreno:"));
// }

// let landLength = Number(prompt("Digite o comprimento do terreno:"));

// while (isNaN(landLength) || landLength <= 0) {
//     alert("Valor inválido!");
//     landLength = Number(prompt("Digite o comprimento do terreno:"));
// }

// const landArea = landWidth * landLength;

// if(landArea < 100) {
//     landClass = "TERRENO POPULAR";
// } else if(landArea > 500) {
//     landClass = "TERRENO VIP";
// } else {
//     landClass = "TERRENO MASTER";
// }

// document.write(`<p>Seu terreno tem ${landArea}m² de área e esta classificado como ${landClass}.</p>`);