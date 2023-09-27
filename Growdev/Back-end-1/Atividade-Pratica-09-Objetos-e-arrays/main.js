// ----------------------------------- Atividade 1 -----------------------------------

// Crie um objeto em JavaScript para colocar dois atributos de um produto. Atribua o preço e descrição do produto com o valor “90” e a descrição com o valor “Mouse”. Mostre no console o valor dos dois atributos.

// RESPOSTA:

// const product = {};

// product["value"] = 90;
// product.description = "Mouse";

// for (const key in product) {
//     console.log(product[key]);
// };



// ----------------------------------- Atividade 2 -----------------------------------

// Crie um objeto em JavaScript para colocar 5 atributos de um notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console, exatamente como está na atividade.

// RESPOTA:

// const notebook = {};

// notebook["Processador"] = "i7";
// notebook["Memória"] = "16GB";
// notebook["Preço"] = 5000;
// notebook["HD"] = "1TB";
// notebook["SSD"] = "256GB";

// for (const key in notebook) {
//     console.log(`${key} = ${notebook[key]}`);
// };



// ----------------------------------- Atividade 3 -----------------------------------

// Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta turma de 2 alunos.

// RESPOSTA:

// function showStudentInfo(StudentName) {
//     console.log(`Informações do aluno ${StudentName.name}:`);
//     for (const key in StudentName) {
//         console.log(`${key} = ${StudentName[key]}`);
//     };
//     const studentGradeAverage = ((StudentName.grade1 + StudentName.grade2) / 2).toFixed(2);
//     console.log(`Média das notas do aluno: ${studentGradeAverage}`);
// };

// const firstStudent = {
//     name: "Jean",
//     grade1: 8,
//     grade2: 9.5
// };

// const secondStudent = {
//     name: "Rafael",
//     grade1: 6,
//     grade2: 10
// };

// const classGradeAvarage = ((((firstStudent.grade1 + firstStudent.grade2) / 2) + ((secondStudent.grade1 + secondStudent.grade2) / 2)) / 2).toFixed(2);

// showStudentInfo(firstStudent);
// showStudentInfo(secondStudent);
// console.log(`A média da turma é ${classGradeAvarage}`);



// ----------------------------------- Atividade 4 -----------------------------------

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

// const unemployedPeople = people.filter((person) => person.situation === "desempregado(a)");
// const earn2500OrLess = people.filter((person) => person.salary <= 2500);
// const earnMoreThan2500 = people.filter((person) => person.salary > 2500);

// document.write(`<h3>Pessoas desempregadas:</h3>`);
// show(unemployedPeople);
// document.write(`<h3>Pessoas empregadas com salário menor ou igual a 2500:</h3>`);
// show(earn2500OrLess);
// document.write(`<h3>Pessoas empregadas com salário maior que 2500:</h3>`);
// show(earnMoreThan2500);