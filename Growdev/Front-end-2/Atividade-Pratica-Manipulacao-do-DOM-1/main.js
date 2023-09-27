// Atividade 1:

function changeParagraph() {
    const name = prompt("Digite seu nome:");
    document.getElementsByTagName("p")[0].innerHTML = `E aí ${name}! Você está deixando o seu site
    dinâmico.`;
}

// Atividade 2:

let incrementer = 0;

function counter() {
    document.getElementsByTagName("p")[0].style.display = "block";
    incrementer++;
    document.getElementsByTagName("p")[0].innerHTML = `O contador está com ${incrementer} cliques.`;
}

function reset() {
    document.getElementsByTagName("p")[0].style.display = "none";
    incrementer = 0;
}