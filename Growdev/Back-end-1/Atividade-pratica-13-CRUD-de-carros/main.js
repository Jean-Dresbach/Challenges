

// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:


// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este identificador deve ser gerado de forma automática


// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul | Preço: R$40.000


// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000


// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário atualize somente a cor e o preço.


// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo


// 6 - Sair do sistema


// --------------------------- CRUD DE CARROS ---------------------------

let filterBrand = "";
let numberOfRegisteredVehicle = 1;

const registeredVehicle = [
    {
        id: 1,
        model: "X",
        brand: "TESLA",
        color: "BRANCO",
        year: 2020,
        price: 500000
    }
]

function registerNewVehicle() {
    const newVehicle = {};
    newVehicle.id = registeredVehicle.length + 1;
    newVehicle.model = (prompt("Digite o modelo do carro:")).toUpperCase();
    newVehicle.brand = (prompt("Digite a marca do carro:")).toUpperCase();
    newVehicle.color = (prompt("Digite a cor do carro:")).toUpperCase();
    newVehicle.year = parseInt(prompt("Digite o ano do carro:"));
    newVehicle.price = parseFloat(prompt("Digite o preço do carro:"));
    registeredVehicle.push(newVehicle);
    numberOfRegisteredVehicle++;
}

function listRegisteredVehicle(array, filteredByBrand) {
    const copyArray = [...array];
    copyArray.sort((a, b) => a.price - b.price);
    if(filteredByBrand === false) {
        console.log(`--------------------- CARROS REGISTRADOS:`);
        copyArray.forEach(vehicle => console.log(`ID: ${vehicle.id} | Modelo: ${vehicle.model} | Marca: ${vehicle.brand} | Ano: ${vehicle.year} | Cor: ${vehicle.color} | Preço: R$${vehicle.price.toFixed(2)}`));
    } else {
        console.log(`------------ CARROS REGISTRADOS DA MARCA ${filterBrand}:`);
        copyArray.forEach(vehicle => console.log(`ID: ${vehicle.id} | Modelo: ${vehicle.model} | Cor: ${vehicle.color} | Preço: R$${vehicle.price.toFixed(2)}`));
    }
}

function sortByBrand() {
    filterBrand = (prompt("Digite a marca a ser filtrada:")).toUpperCase();
    return registeredVehicle.filter(vehicle => vehicle.brand === filterBrand);
}

function uptadeVehicle(vehicleId) {
    if(vehicleId === undefined || isNaN(vehicleId) || vehicleId < 0 || vehicleId >= registeredVehicle.length) {
        return console.log("Veículo, não encontrado.");
    } else {
        registeredVehicle[vehicleId].color = prompt("Digite a nova cor do carro:").toLocaleUpperCase();
        registeredVehicle[vehicleId].price = parseFloat(prompt("Digite o novo preço do carro:"));
        console.log("------------ Carro atualizado com sucesso!");
    }
}

function removeVehicle(vehicleId) {
    if(vehicleId === undefined || isNaN(vehicleId) || vehicleId < 0 || vehicleId >= registeredVehicle.length) {
        return console.log("Veículo, não encontrado.");
    } else {
        registeredVehicle.splice(vehicleId, 1);
        console.log("Veículo removido com sucesso!");
        numberOfRegisteredVehicle--;
    }
}


// ----------------------- Início do código: -----------------------

alert(`Bem-vindo ao sistema de CRUD de veículos:`);
alert(`No momento, o sistema tem ${numberOfRegisteredVehicle} carros cadastrados!`);

let stopUserManager = false;
while (!stopUserManager) {
    switch (prompt("Escolha uma das opções para interagir com o sistema:\n1 - Cadastrar veículo\n2 - Listar todos os veículos\n3 - Filtrar veículos por marca\n4 - Atualizar veículo\n5 - Remover veículo\n6 - Sair do sistema")) {
        case "1":
            registerNewVehicle();
            alert(`No momento, o sistema tem ${numberOfRegisteredVehicle} carros cadastrados!`);
            break;
        case "2":
            listRegisteredVehicle(registeredVehicle, false);
            break;
        case "3":
            listRegisteredVehicle(sortByBrand(), true);
            break;
        case "4":
            uptadeVehicle(parseInt(prompt("Digite o identificador do carro:")));
            break;
        case "5":
            removeVehicle(parseInt(prompt("Digite o identificador do carro:")));
            break;
        case "6":
            stopUserManager = true;
            break;
        default:
            prompt("Valor inválido!");
            break;
    }
}






