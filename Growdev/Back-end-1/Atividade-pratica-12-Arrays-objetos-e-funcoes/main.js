// Chegou a hora de aplicar o conhecimento adquirido em nosso encontro. Lembrando sempre que os exercícios e desafios serão nossos principais indicadores sobre o conhecimento de vocês, tanto para ajudá-los como na hora do direcionamento para as vagas. Crie um arquivo com o script necessário para resolução do exercício considerando o seguinte array:

const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
];


function separaArrayPorSexo(sexo) {
    const separaArrayPorSexo = data.filter(pessoa => pessoa.sexo === sexo);
    return separaArrayPorSexo;
};


// 01 - Imprima no console a quantidade de pessoas Total.

console.log("------------- Quantidade total de pessoas:");
console.log(data.length);


// 02 - Imprima no console a quantidade de pessoas do sexo Feminino.

console.log("------------- Quantidade total de pessoas do sexo Feminino:");
console.log(separaArrayPorSexo("F").length);


// 03 - Imprima no console a soma do salário de todas as pessoas.

const somaTotalSalarios = data.reduce((acumulador, pessoa) => acumulador + pessoa.salario, 0);
console.log("------------- Soma do salário de todas as pessoas:");
console.log(parseFloat(somaTotalSalarios.toFixed(2)));


// 04 - Imprima no console a média do salário de todas as pessoas.

const mediaSalarios = somaTotalSalarios / data.length;
console.log("------------- Média do salário de todas as pessoas:");
console.log(parseFloat(mediaSalarios.toFixed(2)));


// 05 - Imprima no console a soma do salário de todos as pessoas do sexo Masculino

const somaTotalSalariosMasculino =  separaArrayPorSexo("M").reduce((acumulador, pessoa) => acumulador + pessoa.salario, 0);
console.log("------------- Soma do salário de todos as pessoas do sexo Masculino:");
console.log(parseFloat(somaTotalSalariosMasculino.toFixed(2)));


// 06 - Imprima no console a média do salário de todas as pessoas do sexo Masculino

const mediaSalariosMasculino = somaTotalSalariosMasculino / separaArrayPorSexo("M").length; 
console.log("------------- Média do salário de todas as pessoas do sexo Masculino:");
console.log(parseFloat(mediaSalariosMasculino.toFixed(2)));


// 07 - Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.

console.log("------------- Existe algum salário superior a R$ 7.000?");
console.log(data.some(pessoa => pessoa.salario > 7000));


// 08 - Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.

console.log("------------- Posição da pessoa de nome Eva Trindade");
console.log(data.findIndex(pessoa => pessoa.nome === "Eva Trindade"));


// 09 - Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".

console.log("------------- Pessoas que o nome possua o sobrenome Silva");
console.log(data.filter(pessoa => pessoa.nome.includes("Silva")));


// 10 - Imprima os nomes utilizando o MAP

console.log("------------- Impressão de todos os nomes:");
console.log(data.map(pessoa => pessoa.nome));