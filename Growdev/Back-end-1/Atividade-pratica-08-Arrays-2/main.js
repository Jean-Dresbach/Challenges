// ------------------------------------ Atividade 1 ------------------------------------

// Desenvolva um algoritmo para percorrer um vetor de 15 elementos inteiros já preenchido e imprima todos os  valores pares.

// RESPOSTA:

// const vector = [3, 24, 15, 28, 33, 43, 10, 7, 64, 105, 168, 231, 18, 49, 78];
// let result = "";


// for (let index = 0; index < vector.length; index++) {
//     if(vector[index] %2 === 0) {
//         result += vector[index] + " - ";
//     };
// };

// document.write(`<p>Os valores pares são: ${result}Acabou!</p>`);



// ------------------------------------ Atividade 2 ------------------------------------

// Desenvolva um algoritmo para percorrer um vetor de 20 elementos inteiros e no final mostre a soma de todos os elementos.

// RESPOSTA:

// let vector = [];
// let sum = 0;

// for (let index = 0; index < 20; index++) {
//     let integerElement = parseInt(prompt("Digite um elemento inteiro:"));
//     while(isNaN(integerElement)) {
//         alert("Valor inválido!");
//         integerElement = parseInt(prompt("Digite um elemento inteiro:"));
//     };
//     vector.push(integerElement);
// };

// for (let index = 0; index < vector.length; index++) {
//     sum += vector[index];
// };

// document.write(`<p>A soma de todos os elementos inteiros do vetor é ${sum}.</p>`);



// ------------------------------------ Atividade 3 ------------------------------------

// Desenvolva um algoritmo que preenche um vetor com os 4 primeiros números perfeitos.

// RESPOSTA:

// let vector = [];
// let perfectNumbers = 0;
// let result = "";

// for (let index = 1; perfectNumbers < 4; index++) {
//     let sum = 0;
//     for (let i = index; i > 0; i--) {
//         if(index %i === 0) {
//             sum += i;
//         };
//     };
//     if(sum - index === index) {
//         vector.push(index)
//         perfectNumbers++;
//     };
// };

// for (const perfectNumber of vector) {
//     result += perfectNumber + " - ";
// };

// document.write(`<p>Os quatro primeiros números perfeitos são: ${result}Acabou!</p>`);



// ------------------------------------ Atividade 4 ------------------------------------

// Crie uma função que recebe 2 vetores de 10 elementos inteiros e que retorne a união dos dois em um novo vetor.

// RESPOSTA:

// const vector1 = [1,2,3,4,5,6,7,8,9,10];
// const vector2 = [11,12,13,14,15,16,17,18,19,20];

// function arrayJunction (a, b) {
//     let newVector = [];
//     for (const item of a) {
//         newVector.push(item);
//     }
//     for (const item of b) {
//         newVector.push(item);
//     }
//     return newVector;
// }
// console.log(arrayJunction(vector1, vector2));



// ------------------------------------ Atividade 5 ------------------------------------

// Crie uma função que recebe um vetor de inteiros e um número inteiro e retorne verdadeiro se o número faz parte do vetor ou falso se não faz parte.

// RESPOSTA:

// function checkNumberInVector(vector, number) {
//     return vector.includes(number);
// };

// const vectorOfIntegers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const integerNumber = 11;
// console.log(checkNumberInVector(vectorOfIntegers, integerNumber));



// ------------------------------------ Atividade 6 ------------------------------------

// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, e que exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve mostrar também os nomes na ordem inversa em que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

// let namesList = [];

// function loopThroughArray(array) {
//     let result = "";
//     for (const name of array) {
//       result += " " + name;  
//     };
//     return result;
// }

// for (let index = 0; index < 5; index++) {
//     const input = prompt("Digite um nome:");
//     namesList.push(input);
// };

// document.write(`<p>Lista dos nomes inseridos: ${loopThroughArray(namesList)}.</p><p>Lista  inversa dos nomes inseridos: ${loopThroughArray(namesList.reverse())}.</p>`);
