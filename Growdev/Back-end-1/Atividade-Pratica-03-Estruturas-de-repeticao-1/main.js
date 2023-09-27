// --------------------------- Atividade 1 ---------------------------

// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

// RESPOSTA:

// let smallestHeight = 0;
// let biggestHeight = 0;
// let amountOfHeights = 0;

// while (amountOfHeights < 15) {
//     let height = Number(prompt("Digite uma altura:"));
//     if (smallestHeight > height || smallestHeight == 0) {
//         smallestHeight = height;
//     } 
//     if(biggestHeight < height) {
//         biggestHeight = height;
//     }
//     amountOfHeights++
// };

// document.write(`<p>A quantidade de alturas digitadas é ${amountOfHeights}</p><p>A menor altura do grupo é ${smallestHeight}m.</p><p>A maior altura do grupo é ${biggestHeight}m.</p>`);



// --------------------------- Atividade 2 ---------------------------

// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

// RESPOSTA:

// let heightPedroA = 150;
// let heightLucasA = 110;
// let heightPedroB = 150;
// let heightLucasB = 110;
// let amontOfYearsA = 0;
// let amontOfYearsB = 0;

// for (; heightPedroA !== heightLucasA; amontOfYearsA++) {
//     heightPedroA += 2;
//     heightLucasA += 3;
// }

// for (; heightPedroB >= heightLucasB; amontOfYearsB++) {
//     heightPedroB += 2;
//     heightLucasB += 3;
// }

// document.write(`<p>Para que Lucas e Pedro tenham a mesma altura, foi necessário ${amontOfYearsA} anos.</p><p>Para que Lucas seja maior que Pedro foi necessário ${amontOfYearsB} anos.</p>`);



// --------------------------- Atividade 3 ---------------------------

// Escreva um algoritmo que faça a tabuada de um número e apresente o resultado de acordo com o modelo a seguir, sabendo que o multiplicando deverá ser fornecido pelo usuário (n) e a quantidade de iterações também (i).

// RESPOSTA:

// const n = parseInt(prompt("Digite o multiplicando:"));
// const i = parseInt(prompt("Digite a quantidade de iterações:"));

// for (let counter = 0; i >= counter; counter++) {
//     document.write(`<p>${counter} * ${n} = ${n * counter}</p>`);
// }



// --------------------------- Atividade 4 ---------------------------

// Escreva um algoritmo que percorra os números inteiros entre 1 e 250 e verifique quais números são múltiplos de 3 e quais são múltiplos de 5.

// RESPOSTA:

// const numbersAmount = 250;
// let multiple3result = "";
// let multiple5result = "";

// for (let i = 1; i <= numbersAmount; i++) {
//     if(i %3 === 0) {
//         multiple3result += i + "; ";    
//     }
//     if(i %5 === 0) {
//         multiple5result += i + "; ";    
//     }
// }

// document.write(`<p>Os números inteiros multiplos de 3 são: ${multiple3result}</p><p>Os números inteiros multiplos de 5 são: ${multiple5result}</p>`);



// --------------------------- Atividade 5 ---------------------------

// Faça um programa usando a estrutura “for” que leia um número inteiro positivo e mostre na tela uma contagem de 0 até o valor digitado:

// RESPOSTA:

// let count = "";
// let number = parseInt(prompt("Digite um número inteiro e positivo:"));

// while (isNaN(number) || number <= 0) {
//     number = parseInt(prompt("Valor inválido! Por favor igite um número inteiro e positivo:"));
// }

// for (let counter = 0; counter <= number; counter++) {
//     count += counter + ", "; 
// }

// document.write(`<p>Contagem: ${count} FIM!</p>`);



// --------------------------- Atividade 6 ---------------------------

// Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, marcando os números que forem primos, exatamente como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

// RESPOSTA:

// let result = "";

// for (let i = 30; i > 0; i--) {    
//     let dividers = 0;
//     for (let j = i; j > 0; j--) {
//         if(i %j === 0){
//             dividers++;
//         }
//     }
//     if(dividers === 2){
//         result += "[" + i + "] ";
//     } else {
//         result += i + " ";
//     }
// }

// document.write(`<p>${result}</p>`);



// --------------------------- Atividade 7 ---------------------------

// Desenvolva um algoritmo que leia 10 números, calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.

// RESPOSTA:

// let arithmeticAverage = 0;
// let numberSum = 0;
// let negativeNumbers = 0;
// let positiveNumbers = 0;
// let percentagePositiveNumbers = 0;
// let percentageNegativeNumbers = 0;

// for (let i = 1; i <= 10; i++) {
//     let number = Number(prompt("Digite um número:"));
//     while (isNaN(number)) {
//         alert("Valor inválido!");
//         number = Number(prompt("Digite um número:"));
//     }
//     numberSum += number;
//     arithmeticAverage = (numberSum / i).toFixed(2);
//     if(number > 0) positiveNumbers++;
//     if(number < 0) negativeNumbers++;
//     percentagePositiveNumbers = ((positiveNumbers * 100) / i).toFixed(2);
//     percentageNegativeNumbers = ((negativeNumbers * 100) / i).toFixed(2);
// }

// document.write(`<p>Média aritmética dos valores digitados: ${arithmeticAverage}.</p><p>Quantidade de números positivos: ${positiveNumbers}.</p><p>Quantidade de números negativos: ${negativeNumbers}.</p><p>Percentual de números positivos: ${percentagePositiveNumbers}%.</p><p>Percentual de números negativos: ${percentageNegativeNumbers}%.</p>`);