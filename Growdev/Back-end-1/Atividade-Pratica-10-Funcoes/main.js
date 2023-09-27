// ------------------------- Atividade 01 -------------------------

// Crie uma função que recebe 3 notas de um aluno por parâmetro e uma letra. Se a letra for A a função deve calcular a média aritmética, se for P, a média ponderada (peso: 5, 3 e 2).

// RESPOSTA:

// function calculateAverage(grade1, grade2, grade3, typeOfAvarage) {
//     if(typeOfAvarage === "A") {
//         return parseFloat(((grade1 + grade2 + grade3) / 3).toFixed(2));
//     } else if(typeOfAvarage === "P") {
//         return parseFloat(((grade1 * 5 + grade2 * 3 + grade3 * 2) / (5 + 3 + 2)).toFixed(2));
//     } else {
//         return "Valor inválido!";
//     };
// };

// console.log(calculateAverage(5, 5, 7, "A"));



// ------------------------- Atividade 02 -------------------------

// Crie uma função que recebe um valor inteiro e retorne verdadeiro se for ímpar ou falso se for par.

// REPOSTA:

// function isOdd(value) {
//   return value %2 !== 0;  
// };

// console.log(isOdd(3));



// ------------------------- Atividade 03 -------------------------

// Crie uma função que recebe por parâmetro um valor inteiro e positivo e retorne verdadeiro se o número for primo ou falso se não for.

// RESPOSTA:

// function isPrime(value) {
//     let dividers = 0;
//     for (let index = value; index > 0; index--) {
//         if(value %index === 0) {
//             dividers++;
//         };
//     };
//     return dividers == 2;
// };

// console.log(isPrime(7));



// ------------------------- Atividade 04 -------------------------

// Crie uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna esse tempo em horas, minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

// RESPOSTA:

// function timeConverter(seconds) {
//     let hours = 0;
//     let minutes = 0;
//     while (seconds >= 60) {
//         if(seconds >= 3600) {
//             seconds -= 3600;
//             hours++;
//         } else {
//             seconds -= 60;
//             minutes++;
//         }; 
//     };
//     return hours + ":" + minutes + ":" + seconds;
// };

// console.log(timeConverter(15348));



// ------------------------- Atividade 05 -------------------------

// Crie uma função que recebe um valor inteiro e retorne verdadeiro se é um valor perfeito ou falso se não for. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

// RESPOSTA:

// function isPerfect(value) {
//     let sum = 0;
//     for (let i = value; i > 0; i--) {
//         if(value %i === 0) {
//             sum += i;
//         };
//     };
//     return sum - value === value;
// };
    
// console.log(isPerfect(5));



// ------------------------- Atividade 06 -------------------------

// Crie uma função chamada acessoAoSite() que não tenha parâmetro. Esta função será chamada ao abrir a página e mostrará um alerta informando “Bem vindo ao site”.

// RESPOSTA:

// function acessoAoSite() {
//     alert("Bem vindo ao site");
// };

// acessoAoSite();



// ------------------------- Atividade 07 -------------------------

// Crie uma função chamada mostrarMensagem() que não tenha parâmetro. Esta função será chamada ao abrir a página e mostrará uma mensagem no console.log() informando “Acesso à aplicação NomeAplicação” e um alerta informando “Bem vindo à aplicação NomeApliação”. Sendo que o nome da aplicação deve ser salvo em uma variável para mostrar nas mensagens.

// RESPOSTA:

// const nomeApliação = "Cleber";
// function mostrarMensagem() {
//     console.log(`Acesso à aplicação ${nomeApliação}`);
//     alert(`Bem vindo à aplicação ${nomeApliação}`);
// };

// mostrarMensagem();



// ------------------------- Atividade 08 -------------------------

// Crie uma função chamada mostrarDobro(num), que recebe um parâmetro sendo um número inteiro. Esta função será chamada ao abrir a página e mostrará um alerta com o resultado. Exemplo: “O dobro do número 5 é 10.”

// RESPOSTA:

// function mostrarDobro(num) {
//   alert(`O dobro do número ${num} é ${num * 2}.`);  
// };

// mostrarDobro(5);



// ------------------------- Atividade 09 -------------------------

// Crie uma função chamada calcularMedia(nota1, nota2, nota3, nome), que recebe 4 parâmetros sendo três inteiros e um texto(String). Esta função será chamada ao abrir a página e mostrará um alerta com a média. Exemplo: “João, sua média é 70.” A função também deve mostrar no console.log() as notas recebidas. 
// Exemplo:
// “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

// RESPOSTA:

// function calcularMedia(nota1, nota2, nota3, nome) {
//     let media = parseFloat(((nota1 + nota2 + nota3) / 3).toFixed(2));
//     alert(`${nome}, sua média é ${media}.`);
//     console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
// };

// calcularMedia(7, 6, 10, "Jean");