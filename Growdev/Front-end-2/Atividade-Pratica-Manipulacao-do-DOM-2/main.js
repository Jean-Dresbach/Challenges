const arrayOfCards = document.querySelectorAll(".card");
for (const card of arrayOfCards) {
    card.style.backgroundColor = "#e16e0e";
}

const arrayOfCardTitles = document.querySelectorAll(".titulo-card");
for (const title of arrayOfCardTitles) {
    title.style.color = "#2b3858";
    title.style.marginTop = "10px"
    title.innerText = "Meu Card"
}

const arrayOfCardDescriptions = document.querySelectorAll(".descricao-card");
for (const description of arrayOfCardDescriptions) {
    description.style.color = "white";
    description.innerText = "Descrição modificada pelo JavaScript";
    description.style.fontSize = "15px";
    description.style.margin = "40px 0px"
}

const arrayOfCardEditButton = document.querySelectorAll(".botao-editar");
for (const btnEdit of arrayOfCardEditButton) {
    btnEdit.style.backgroundColor = "#008000";
    btnEdit.style.color = "white";
    btnEdit.style.padding = "8px";
    btnEdit.style.border = "none"
    btnEdit.style.borderRadius = "10px";
    btnEdit.style.fontSize = "15px";
    btnEdit.addEventListener("click", function editarCard() {
        alert("Clicou em editar!");
    });
}

const arrayOfCardDeleteButton = document.querySelectorAll(".botao-apagar");
for (const btnEdit of arrayOfCardDeleteButton) {
    btnEdit.style.backgroundColor = "#ff0000";
    btnEdit.style.color = "white";
    btnEdit.style.padding = "8px";
    btnEdit.style.border = "none"
    btnEdit.style.borderRadius = "10px";
    btnEdit.style.fontSize = "15px";
    btnEdit.addEventListener("click", function apagarCard() {
        switch (confirm("Tem certeza que deseja excluir o card?")) {
            case true:
                alert("Confirmado!");
                break;
            case false:
                alert("Cancelou!");
                break;
        }
    });
}