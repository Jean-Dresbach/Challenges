// ----------------------------------------- Atividade 01 -----------------------------------------

// Considere o seguinte array:

// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];
// a. Imprima no console o índice do primeiro salário maior que 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o filter

// RESPOSTA:

// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

// console.log(salarios.findIndex(salario => salario > 7500));

// const listaFiltrada = salarios.filter(salario => salario > 8000);
// console.log(listaFiltrada);



// ----------------------------------------- Atividade 02 -----------------------------------------

// James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:

// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo"];

// mas James tinha isto:
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// Usando somente o método splice insira as cores que faltam na array e remova a cor "Preto", seguindo estes passos:

// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
// c. Adicione "Roxo"

// RESPOSTA:

// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// rainbow.splice(2, 1, "Amarelo", "Verde");
// rainbow.splice(5, 0, "Roxo");

// console.log(rainbow);



// ----------------------------------------- Atividade 03 -----------------------------------------

// Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar cadastrando ou não. No final, mostre as pessoas que estão desempregadas, as pessoas que estão empregadas separadas pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

// RESPOSTA:

// function show(array) {
//     for (const item of array) {
//         if(item.situation === "desempregado(a)") {
//             document.write(`<p>Nome: ${item.name}, Idade: ${item.age}</p>`);
//         } else {
//             document.write(`<p>Nome: ${item.name}, Idade: ${item.age}, Salário: ${item.salary}</p>`);
//         };
//     };
// };

// const people = [];
// let stopRegister = false;

// while (stopRegister === false) {
//     const person = {};
//     person.name = (prompt("Digite o nome da pessoa:")).toLocaleUpperCase();
//     person.age = parseInt(prompt("Digite a idade da pessoa:"));
//     while (isNaN(person.age) || person.age <= 0) {
//         alert("Valor inválido!");
//         person.age = parseInt(prompt("Digite a idade da pessoa:"));
//     };
//     let areYouWorking = parseInt(prompt("A pessoa que está sendo cadastrada está trabalhando no momento? Se sim, digite 1, se não digite 2."));
//     while (isNaN(areYouWorking) || areYouWorking < 1 || areYouWorking > 2) {
//         alert("Valor inválido!");
//         areYouWorking = parseInt(prompt("A pessoa que está sendo cadastrada está trabalhando no momento? Se sim, digite 1, se não digite 2."));
//     };
//     if(areYouWorking === 1) {
//         person.situation = "empregado(a)";
//         person.salary = Number(prompt("Digite o salário da pessoa:"));
//         while (isNaN(person.salary) || person.salary <= 0) {
//             alert("Valor inválido!");
//             person.salary = Number(prompt("Digite o salário da pessoa:"));
//         };
//     } else {
//         person.situation = "desempregado(a)";
//     };
//     people.push(person);
//     let continueRegister = parseInt(prompt("Deseja cadastrar mais uma pessoa? Se sim, digite 1, se não, digite 2."));
//     while (isNaN(continueRegister) || continueRegister < 1 || continueRegister > 2) {
//         alert("Valor inválido!");
//         continueRegister = parseInt(prompt("Deseja cadastrar mais uma pessoa? Se sim, digite 1, se não, digite 2."));
//     };
//     if(continueRegister === 2) stopRegister = true;
// };

// const unemployedPeople = people.filter(person => person.situation === "desempregado(a)");
// const earn2500OrLess = people.filter(person => person.salary <= 2500);
// const earnMoreThan2500 = people.filter(person => person.salary > 2500);

// document.write(`<h3>Pessoas desempregadas:</h3>`);
// show(unemployedPeople);
// document.write(`<h3>Pessoas empregadas com salário menor ou igual a 2500:</h3>`);
// show(earn2500OrLess);
// document.write(`<h3>Pessoas empregadas com salário maior que 2500:</h3>`);
// show(earnMoreThan2500);