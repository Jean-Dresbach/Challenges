// ------------------------------------- Atividade 1 -------------------------------------

// Criar um array e percorrê-lo utilizando o loop for
// a. Crie um array com o nome "nomes" e adicione 4 nomes de pessoas que você conhece
// b. Utilize o loop for para percorrer o array e exibir os nomes na tela

// RESPOSTA:

// const nomes = ["João", "Jane", "Jessica", "Douglas"];

// for (let index = 0; index < nomes.length; index++) {
//     document.write(`<p>${nomes[index]}</p>`);
// }



// ------------------------------------- Atividade 2 -------------------------------------

// Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos números na tela

// RESPOSTA:

// const numeros = [];

// for (let index = 0; index < 5; index++) {
//     const entrada = Number(prompt("Digite um número:"));
//     numeros.push(entrada);
// }

// let soma = 0;

// for (const numero of numeros) {
//     soma += numero;
//     console.log(numero);
// }

// document.write(`<p>A soma dos números digitados é ${soma}.</p>`);



// ------------------------------------- Atividade 3 -------------------------------------

// Utilizar os métodos push, pop, unshift e shift para manipular um array
// a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas de sua escolha
// b. Utilize o método push para adicionar uma fruta no final do array
// c. Utilize o método pop para remover a última fruta do array
// d. Utilize o método unshift para adicionar uma fruta no início do array
// e. Utilize o método shift para remover a primeira fruta do array
// f. Exiba o array resultante na tela

// RESPOSTA:

// const frutas = ["maça", "laranja", "uva"];

// document.write(`<h3>Array inicial:</h3>`);

// for (const fruta of frutas) {
//     document.write(`<p>${fruta}</p>`);
// }

// document.write(`<h3>Array manipulado com método push:</h3>`);

// frutas.push("banana");

// for (const fruta of frutas) {
//     document.write(`<p>${fruta}</p>`);
// }

// document.write(`<h3>Array manipulado com método pop:</h3>`);

// frutas.pop();

// for (const fruta of frutas) {
//     document.write(`<p>${fruta}</p>`);
// }

// document.write(`<h3>Array manipulado com método unshift:</h3>`);

// frutas.unshift("tomate");

// for (const fruta of frutas) {
//     document.write(`<p>${fruta}</p>`);
// }

// document.write(`<h3>Array manipulado com método shift:</h3>`);

// frutas.shift();

// for (const fruta of frutas) {
//     document.write(`<p>${fruta}</p>`);
// }