// --------------------------- Atividade 1 ---------------------------

// const myAge = 20;

// document.write(`<p>Minha idade é ${myAge} anos.</p>`);



// --------------------------- Atividade 2 ---------------------------

// const x = Number(prompt("Digite o valor de x:"));
// const y = Number(prompt("Digite o valor de y:"));
// const z = x + y;

// document.write(`<p>O resultado da soma de ${x} e ${y} é ${z}</p>`);



// --------------------------- Atividade 3 ---------------------------

// const totalPurchaseAmount = Number(prompt("Digite o valor total da compra:"));
// const installmentsNumber = Number(prompt("Quantidades de parcelas desejadas:"));
// const installmentValue = (totalPurchaseAmount / installmentsNumber).toFixed(2);

// document.write(`<p>O valor total da compra foi R$${totalPurchaseAmount}.</p><p>Forma de pagamento: ${installmentsNumber}x de R$${installmentValue}.</p>`);



// --------------------------- Atividade 4 ---------------------------

// const minutes = Number(prompt("Digite a quantidade de minutos:"));
// const seconds = minutes * 60;

// document.write(`<p>${minutes} minutos equivale à ${seconds} segundos!</p>`);



// --------------------------- Atividade 5 ---------------------------

// const studentName = prompt("Digite o nome do aluno:");
// const grade1 = Number(prompt("Digite a primeira nota do aluno:"));
// const grade2 = Number(prompt("Digite a segunda nota do aluno:"));
// const grade3 = Number(prompt("Digite a teceira nota do aluno:"));
// const simpleAverage = ((grade1 + grade2 + grade3) / 3).toFixed(2);

// document.write(`<p>O aluno ${studentName} ficou com média ${simpleAverage}</p>`);



// --------------------------- Atividade 6 ---------------------------

// let A = 10;
// let B = 20;
// const C = A;
// A = B;
// B = C;

// document.write(`<p>O valor de A é ${A}.</p><p>O valor de B é ${B}.</p>`);



// --------------------------- Atividade 7 ---------------------------

// const voters = parseInt(prompt("Digite o número de eleitores:"));
// const blankVotes = parseInt(prompt("Digite o número de votos em branco:"));
// const nullVotes = parseInt(prompt("Digite o número de votos nulos:"));
// const validVotes = voters - (blankVotes + nullVotes);
// const blankVotesPercentage = (blankVotes * 100 / voters).toFixed(2);
// const nullVotePercentage = (nullVotes * 100 / voters).toFixed(2);
// const validVotesPercentage = (validVotes * 100 / voters).toFixed(2);

// document.write(`<p>O número total de eleitores é ${voters}.</p><p>O percentual de votos brancos em relação ao número total de eleitores é ${blankVotesPercentage}%.</p><p>O percentual de votos nulos em relação ao número total de eleitores é ${nullVotePercentage}%.</p><p>O percentual de votos válidos em relação ao número total de eleitores é ${validVotesPercentage}%.</p>`);



// --------------------------- Atividade 8 ---------------------------

// const number1 = Number(prompt("Digite o primeiro número:")); 
// const number2 = Number(prompt("Digite o segundo número:")); 
// let checker;

// if(number1 > number2) {
//     checker = "<p>Primeiro é maior.</p>";
// } else if(number1 < number2) {
//     checker = "<p>Segundo é maior.</p>"
// } else {
//     checker = "<p>Números iguais.</p>"
// };

// document.write(checker);



// --------------------------- Atividade 9 ---------------------------

// const appleAmount = parseInt(prompt("Digite a quantidade de maças compradas:"));
// const normalCostApple = 0.30;
// const promoCostApple = 0.25;
// const promoAppleAmount = 12;

// if(appleAmount < promoAppleAmount && appleAmount > 0){
//     document.write(`<p>Valor total da compra é R$${(appleAmount * normalCostApple).toFixed(2)}</p><p>Quantidade de maças compradas: ${appleAmount}</p><p>Valor por unidade: R$${normalCostApple}</p>`);
// } else if(appleAmount >= promoAppleAmount){
//     document.write(`<p>Valor total da compra é R$${(appleAmount * promoCostApple).toFixed(2)}</p><p>Quantidade de maças compradas: ${appleAmount}</p><p>Valor por unidade: R$${promoCostApple}</p>`);
// } else {
//     document.write("<p>Quantidade de maças inválida!</p>");
// }



// --------------------------- Atividade 10 ---------------------------

// const NAME = prompt("Digite seu nome:");
// const age = parseInt(prompt("Digite a idade que irá fazer este ano:"));
// const currentYear = parseInt(prompt("Digite o ano atual:"));

// console.log(`Nome: ${NAME}, Idade: ${age} anos, nasceu em ${currentYear - age}.`);



// --------------------------- Atividade 11 ---------------------------

// const number = parseInt(prompt("Digite um número inteiro positivo:"));

// if(number < 0){
//     alert("Número inválido!");
// } else if(number %2 === 0) {
//     alert("Número é par!");
// } else {
//     alert("Número é impar!");
// };



// --------------------------- Atividade 12 ---------------------------

// const currentYear = parseInt(prompt("Digite o ano atual:"));
// const birthYear = parseInt(prompt("Digite seu ano de nascimento:"));
// const age = currentYear - birthYear;
// const legalAgeToVote = 17;

// if(age < 0) {
//     console.log("Idade inválida.");
// } else if(age >= legalAgeToVote) {
//     console.log("Você pode votar este ano!");
// } else {
//     console.log("Você não pode votar este ano!");
// };
