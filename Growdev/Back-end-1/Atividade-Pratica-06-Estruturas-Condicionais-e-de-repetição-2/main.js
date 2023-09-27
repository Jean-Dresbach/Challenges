// ---------------------- Atividade 1 ----------------------

// Crie uma variável para ler a idade de um motorista. Caso o motorista tenha idade maior ou igual a 18 anos imprime no console “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

// RESPOSTA:

// let age = parseInt(prompt("Digite a idade do motorista:"));
// while (isNaN(age) || age <= 0) {
//     alert("Valor inválido!");
//     age = parseInt(prompt("Digite a idade do motorista:"));
// }

// if (age >= 18) {
//     console.log("Pode dirigir.");
// } else {
//     console.log("Não pode dirigir.");
// }



// ---------------------- Atividade 2 ----------------------

// Para o mesmo exercício acima insira mais uma variável a condicional, além de saber se o motorista tem 18 anos ou mais, temos que saber também se ele é habilitado para dirigir. Caso ele tenha idade maior ou igual a 18 anos e possua habilitação, insira no html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

// RESPOSTA:

// let age = parseInt(prompt("Digite a idade do motorista:"));
// while (isNaN(age) || age <= 0) {
//     alert("Valor inválido!");
//     age = parseInt(prompt("Digite a idade do motorista:"));
// }

// let license = prompt("O motorista tem habilitação? Se sim, digite 1, se não, digite qualquer tecla.");


// if (age >= 18 && license == 1) {
//     console.log("Pode dirigir.");
// } else {
//     console.log("Não pode dirigir.");
// }



// ---------------------- Atividade 3 ----------------------

// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um número de 1 a 7 e imprimir no console o dia da Semana. Para este exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim por diante. Caso o número recebido não esteja neste intervalo imprimir “Dia não reconhecido”.

// RESPOSTA:

// const number = parseInt(prompt("Digite um número de 1 à 7:"));

// if(number == 1) {
//     console.log("O dia 1 é domingo.");
// } else if(number == 2) {
//     console.log("O dia 2 é segunda-feira.");
// } else if(number == 3) {
//     console.log("O dia 3 é terça-feira.");
// } else if(number == 4) {
//     console.log("O dia 4 é quarta-feira.");
// } else if(number == 5) {
//     console.log("O dia 5 é quinta-feira.");
// } else if(number == 6) {
//     console.log("O dia 6 é sexta-feira.");
// } else if(number == 7) {
//     console.log("O dia 7 é sábado.");
// } else {
//     console.log("Dia não reconhecido.");
// }



// ---------------------- Atividade 4 ----------------------

// Reescreva o exercício 3, utilizando apenas o SWITCH.

// RESPOSTA: 

// const number = parseInt(prompt("Digite um número de 1 à 7:"));

// switch (number) {
//     case 1:
//         console.log("O dia 1 é domingo.");    
//         break;
//     case 2:
//         console.log("O dia 2 é segunda-feira.");   
//         break;
//     case 3:
//         console.log("O dia 3 é terça-feira.");
//         break;
//     case 4:
//         console.log("O dia 4 é quarta-feira.");
//         break;
//     case 5:
//         console.log("O dia 5 é quinta-feira.");
//         break;
//     case 6:
//         console.log("O dia 6 é sexta-feira.");
//         break;
//     case 7:
//         console.log("O dia 7 é sábado.");
//         break;

//     default:
//         console.log("Dia não reconhecido.");
//         break;
// }



// ---------------------- Atividade 5 ----------------------

// Utilizando FOR, percorra os números de 1 a 10 e imprima no console os números pares.

// RESPOSTA

// for (let index = 1; index <= 10; index++) {
//     if(index %2 === 0) {
//         console.log(index);
//     }
// }



// ---------------------- Atividade 6 ----------------------

// Insira no html 30 ( trinta ) números ímpares.

// RESPOSTA:

// let oddAmount = 0;
// let result = "";

// for (let i = 1; oddAmount < 30; i += 2) {
//     oddAmount++;
//     result += i + " - "; 
// }

// document.write(`<p>Números ímpares: ${result} Acabou!</p>` );



// ---------------------- Atividade 7 ----------------------

// Utilizando do...while, imprima na tela a soma de todos os números entre 10 e 100.

// RESPOSTA:

// let sum = 0;
// let i = 10;
// do {
//     sum += i;
//     i++;
// } while(i <=100);

// document.write(`<p>A soma de todos os números entre 10 e 100 é ${sum}.</p>`)



// ---------------------- Atividade 8 ----------------------

// Crie uma variável para armazenar o salário do usuário e atribua um valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

// RESPOSTA:

// let salary = Number(prompt("Digite um salário:"));
// while (isNaN(salary) || salary <= 0) {
//     alert("Valor inválido!");
//     salary = Number(prompt("Digite um salário:"));
// }

// if(salary < 1903.98) {
//     document.write(`<p>ISENTO DE IR.</p>`);
// } else {
//     document.write(`<p>TRIBUTADO NO IR.</p>`);
// }



// ---------------------- Atividade 9 ----------------------

// Informe um valor a uma variável e imprima no console se o número é primo.

// RESPOSTA:

// const number = parseInt(prompt("Digite um número:"));
// let dividers = 0;

// for (let index = number; index > 0; index--) {
//     if(number %index == 0) {
//         dividers++;
//     }
// }

// if(dividers == 2) {
//     console.log(`O número ${number} é primo.`)
// } else {
//     console.log(`O número ${number} não é primo.`);
// }



// ---------------------- Atividade 10 ----------------------

// Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1 para sexo feminino e 2 para sexo masculino) de uma pessoa, construa um programa que calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

// RESPOSTA:

// let idealWeight = 0;
// let height = Number(prompt("Digite sua altura:"));
// while (isNaN(height) || height <= 0) {
//     alert("Valor inválido!");
//     height = Number(sprompt("Digite sua altura:"));
// }
// let sexChoice = parseInt(prompt("Digite o número correspondente ao seu sexo: 1 - Feminino ou 2 - Masculino."));
// while (isNaN(sexChoice) || sexChoice < 1 || sexChoice > 2) {
//     alert("Valor inválido!");
//     sexChoice = parseInt(prompt("Digite o número correspondente ao sexo do funcionário: 1 - Feminino ou 2 - Masculino."));
// }

// if(sexChoice === 1) {
//     idealWeight = (62.1 * height) -44.7;
// } else {
//     idealWeight = (72.7 * height) -58;
// }

// document.write(`<p>Seu peso ideal é ${(idealWeight).toFixed(2)}kg.</p>`);



// ---------------------- Atividade 11 ----------------------

// Utilizando Switch, faça um programa que pergunte em que turno você estuda. Peça para digitar “M” para matutino ou “V” para vespertino ou “N” para noturno. Mostre um alerta com a mensagem “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”, conforme o caso.

// RESPOSTA:

// const studyShift = prompt("Qual turno você estuda? Digite uma das alternativas: M - matutino; V - vespertino ou N - noturno.");

// switch (studyShift.toUpperCase()) {
//     case "M":
//         alert("Bom dia!");
//         break;
//     case "V":
//         alert("Boa tarde!");
//         break;
//     case "N":
//         alert("Boa Noite!");
//         break;

//     default:
//         alert("Valor inválido!");
//         break;
// }



// ---------------------- Atividade 12 ----------------------

// Para doar sangue é necessário ter entre 18 e 67 anos. Faça um programa que armazene a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&).

// RESPOSTA:

// let age = parseInt(prompt("Digite a sua idade:"));
// while (isNaN(age) || age < 0) {
//     alert("Valor inválido!");
//     age = parseInt(prompt("Digite a sua idade:"));
// }

// if(age >= 18 && age <= 67) {
//     document.write("Você pode doar sangue!");
// } else {
//     document.write("Você não pode doar sangue!");
// }



// ---------------------- Atividade 13 ----------------------

// Faça um algoritmo que armazene um número e imprima os números ímpares entre 1 e o número armazenado.

// RESPOSTA:

// let result = "";
// let number = parseInt(prompt("Digite um número:"));
// while (isNaN(number) || number <= 0) {
//     alert("Valor inválido!");
//     number = parseInt(prompt("Digite um número:"));
// }

// for (let index = 1; index <= number; index += 2) {
//     result += index + " - ";
// }

// document.write(`<p>Números ímpares entre 1 e ${number}: ${result}Acabou!</p>`);



// ---------------------- Atividade 14 ----------------------

// Leia um número, utilizando WHILE multiplique este número por 3 enquanto a soma seja menor que 500 e no final mostre qual o último valor

// RESPOSTA:

// let number = Number(prompt("Digite um número:"));

// while (true) {
//     number *= 3;
//     if(number > 500) break;
//     numberFinalValue = number;
// }

// document.write(`<p>O último valor é ${numberFinalValue}.</p>`);



// ---------------------- Atividade 15 ----------------------

// Crie um algoritmo que armazene três valores, para cada um dos lados de um triângulo: A, B e C. Verifique se os lados fornecidos formam realmente um triângulo. Se formar, deve mostrar no console o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A < B + C e B < A + C e C < A + B. 
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e B=C);

// RESPOSTA: 

// let sideA = Number(prompt("Digite o lado A do triângulo:"));
// let sideB = Number(prompt("Digite o lado B do triângulo:"));
// let sideC = Number(prompt("Digite o lado C do triângulo:"));
// let result = "";

// while (sideA >= sideB + sideC || isNaN(sideA)) {
//     alert("Valor inválido!");
//     sideA = Number(prompt("Digite o lado A do triângulo:"));
// }
// while (sideB >= sideA + sideC || isNaN(sideB)) {
//     alert("Valor inválido!");
//     sideB = Number(prompt("Digite o lado B do triângulo:"));
// }
// while (sideC >= sideA + sideB || isNaN(sideC)) {
//     alert("Valor inválido!");
//     sideC = Number(prompt("Digite o lado C do triângulo:"));
// }

// if(sideA === sideB && sideB === sideC) {
//     result = "Triângulo equilátero";
// } else if(sideA !== sideB && sideA !== sideC && sideB !== sideC) {
//     result = "Triângulo escaleno";
// } else {
//     result = "Triângulo isósceles";
// }

// document.write(`<p>O triângulo é um ${result}.</p>`);



// ---------------------- Atividade 16 ----------------------

// Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

// RESPOSTA:

// let currentYear = 2023;
// let birthYear = parseInt(prompt("Digite seu ano de nascimento:"));

// if(currentYear - birthYear >= 18) {
//     console.log("Você pode votar esse ano!")
// } else {
//     console.log("Você não pode votar esse ano!")
// }



// ---------------------- Atividade 17 ----------------------

// Escreva um algoritmo que armazene o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. O algoritmo deve fazer uma validação para que as porcentagens dos votos armazenados (brancos, nulos e válidos) respeitem o limite do número total de eleitores, ou seja, garantir que a soma dos votos brancos, nulos e válidos não seja maior que o número total de eleitores.

// RESPOSTA:

// let voters = parseInt(prompt("Digite o total de eleitores do município:"));
// let whiteVotes = parseInt(prompt("Digite a quantidade de votos brancos:"));
// let nullVotes = parseInt(prompt("Digite a quantidade de votos nulos:"));
// let validVotes = parseInt(prompt("Digite a quantidade de votos válidos:"));

// while (voters < whiteVotes + nullVotes + validVotes) {
//     alert("Valor(es) incorretos! A soma dos votos brancos, nulos e válidos é maior que o número total de eleitores!");
//     voters = parseInt(prompt("Digite o total de eleitores do município:"));
//     whiteVotes = parseInt(prompt("Digite a quantidade de votos brancos:"));
//     nullVotes = parseInt(prompt("Digite a quantidade de votos nulos:"));
//     validVotes = parseInt(prompt("Digite a quantidade de votos válidos:"));
// }

// let whiteVotesPercentage = ((whiteVotes * 100) / voters).toFixed(2); 
// let nullVotesPercentage = ((nullVotes * 100) / voters).toFixed(2); 
// let validVotesPercentage = ((validVotes * 100) / voters).toFixed(2); 

// document.write(`<p>O total de eleitores no município é ${voters}.</p><p>Pecentual de votos brancos: ${whiteVotesPercentage}%.</p><p>Pecentual de votos nulos: ${nullVotesPercentage}%.</p><p>Pecentual de votos válidos: ${validVotesPercentage}%.</p>`);



// ---------------------- Atividade 18 ----------------------

// Uma loja de eletrodomésticos estabeleceu as seguintes modalidades de pagamento para a venda de suas mercadorias:

// À vista - 2.5% de desconto sobre o preço de tabela;
// De 2 até 5 vezes - preço de tabela, sem desconto ou acréscimo;
// De 6 até 10 vezes - juros de 6% sobre o preço de tabela;
// De 11 até 15 vezes - juros de 13% sobre o preço de tabela.

// Escreva um algoritmo que armazene o preço de tabela e o número de vezes em que o pagamento será feito. Calcule o valor de cada parcela e o preço total da compra e imprima no console.

// RESPOSTA:

// let purchaseFinalValue;
// let installmentValue;

// let listPrice = Number(prompt("Digite o valor da compra:"));
// while (isNaN(listPrice) || listPrice <= 0) {
//     alert("Valor inválido!");
//     listPrice = Number(prompt("Digite o valor da compra:"));
// }

// let installmentsNumberChoice = parseInt(prompt("Digite a quantidade de parcelas tendo em mente as seguintes modalidades:\nÀ vista (1) - 2.5% de desconto sobre o preço de tabela;\nDe 2 até 5 vezes - preço de tabela, sem desconto ou acréscimo;\nDe 6 até 10 vezes - juros de 6% sobre o preço de tabela;\nDe 11 até 15 vezes - juros de 13% sobre o preço de tabela."));

// while (isNaN(installmentsNumberChoice) || installmentsNumberChoice < 1 || installmentsNumberChoice > 15) {
//     alert("Valor inválido!");
//     installmentsNumberChoice = parseInt(prompt("Digite a quantidade de parcelas tendo em mente as seguintes modalidades:\nÀ vista (1) - 2.5% de desconto sobre o preço de tabela;\nDe 2 até 5 vezes - preço de tabela, sem desconto ou acréscimo;\nDe 6 até 10 vezes - juros de 6% sobre o preço de tabela;\nDe 11 até 15 vezes - juros de 13% sobre o preço de tabela."));
// }

// switch (true) {
//     case installmentsNumberChoice === 1:
//         purchaseFinalValue = (listPrice - (listPrice * 0.025)).toFixed(2);
//         console.log(`O valor de tabela é R$${(listPrice).toFixed(2)}.\nVocê optou por parcelar em ${installmentsNumberChoice}x de R$${purchaseFinalValue}.`);
//         break;
    
//     case installmentsNumberChoice > 1 && installmentsNumberChoice < 6:
//         purchaseFinalValue = listPrice;
//         installmentValue = (purchaseFinalValue / installmentsNumberChoice).toFixed(2);
//         console.log(`O valor de tabela é R$${(listPrice).toFixed(2)}.\nVocê optou por parcelar em ${installmentsNumberChoice}x de R$${installmentValue} sem juros.`);
//         break;
    
//     case installmentsNumberChoice > 5 && installmentsNumberChoice < 11:
//         purchaseFinalValue = (listPrice + (listPrice * 0.06)).toFixed(2);
//         installmentValue = (purchaseFinalValue / installmentsNumberChoice).toFixed(2);
//         console.log(`O valor de tabela é R$${(listPrice).toFixed(2)}.\nVocê optou por parcelar em ${installmentsNumberChoice}x de R$${installmentValue} com 6% de juros sobre o preço de tabela.\nTotalizando R$${purchaseFinalValue}.`);
//         break;
    
//     case installmentsNumberChoice > 10:
//         purchaseFinalValue = (listPrice + (listPrice * 0.13)).toFixed(2);
//         installmentValue = (purchaseFinalValue / installmentsNumberChoice).toFixed(2);
//         console.log(`O valor de tabela é R$${(listPrice).toFixed(2)}.\nVocê optou por parcelar em ${installmentsNumberChoice}x de R$${installmentValue} com 13% de juros sobre o preço de tabela.\nTotalizando R$${purchaseFinalValue}.`);
//         break;

//     default:
//         break;
// }