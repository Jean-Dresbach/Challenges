const users = [
    {
        username:  "Jean",
        password: "@1234",
        tasks: [
            {
                title: "Atividade Extra",
                description: "CRUD de tarefas",
                completed: true
            },
            {
                title: "Ir para a academia",
                description: "Treino de perna",
                completed: false
            }
        ]
    }
];

function menu() {
    return choice = parseInt(prompt("Escolha uma das opções para interagir com o sistema:\n1 - Criação de Tarefa\n2 - Listagem de Tarefas:\n3 - Atualização de Status de Tarefa:\n4 - Atualização de Tarefa:\n5 - Exclusão de Tarefa:\n6 - Sair do sistema"));
}

function managerTasks(user) {
    let stopManager = false;
    while (!stopManager) {
        switch (prompt("Escolha uma das opções para interagir com o gerenciador de tarefas:\n1 - Criar tarefa\n2 - Atualização de Status de Tarefa:\n3 - Atualização de Tarefa:\n4 - Listagem de Tarefas:\n5 - Exclusão de Tarefa:\n6 - Deslogar:")) {
            case "1":
                createTask(user, prompt("Digite o título da tarefa:"), prompt("Digite a descrição da tarefa:"));
                break;
            case "2":
                updateTaskStatus(user, parseInt(prompt("Digite o índice da tarefa que deseja alterar o status:")), parseInt(prompt("Escolha uma das alternativas:\n1 - Tarefa concluída\n2 - Tarefa não concluída")) === 1 ? true:false);
                break;
            case "3":
                updateTask(user, parseInt(prompt("Digite o índice da tarefa a ser alterada:")), prompt("Digite o novo título da tarefa:"), prompt("Digite a nova descrição da tarefa:"));
                break;
            case "4":
                listTasks(user);
                break;
            case "5":
                deleteTask(user, parseInt(prompt("Digite o índice da tarefa a ser excluída:")));
                break;
            case "6":
                stopManager = true;
                break;
            default:
                console.log("Valor inválido!");
                break;
        }
    }
}

function validatesIndex(user, index) {
    if(index === undefined || isNaN(index) || index < 0 || index >= user.tasks.length) {
        console.log("Índice não encontrado.");
        return true;
    }
}

function createUser(username, password) {
    if(!username || !password) {
        console.log("Usuário e/ou senha incorreto(s)!");
        return;
    } else {
        users.push({
            username,
            password,
            tasks: []
        });
        console.log("----------------- Usuário criado com sucesso!");
    }
}

function login(username, password) {
    const user = users.find(user => user.username === username);
    if(!user) {
        console.log("Usuário e/ou senha incorreto(a)!");
        return;
    } else if(user.password !== password) {
        console.log("Usuário e/ou senha incorreto(a)!");
        return;
    } else {
        console.log("------------------------ Logado com sucesso!");
        console.log(user);
        return user;
    }
}

function createTask(user, title, description) {
    if(!title) {
        console.log("O título é obrigatório!");
        return;
    }    
    user.tasks.push({
        title,
        description,
        completed: false
    });
    console.log("-------------------- Tarefa criada com sucesso!");
}

function listTasks(user) {
    console.log("------------------------ Lista de tarefas:");
    user.tasks.forEach((task, index) => console.log(`Índice: ${index} | Título: ${task.title} | Descrição: ${task.description} | Status: ${task.completed ? "Concluída":"Não concluída"}`));
}

function updateTaskStatus(user, index, completed) {
    if(validatesIndex(user, index)) return;
    user.tasks[index].completed = completed;
    console.log("----------------- Status atualizado com sucesso!");
}

function updateTask(user, index, newTitle, newDescription) {
    if(validatesIndex(user, index)) {
        return;
    } else if(!newTitle) {
        console.log("O título é obrigatório!");
        return;
    } else {
        user.tasks[index].title = newTitle;
        user.tasks[index].description = newDescription;
        console.log("----------------- Tarefa atualizada com sucesso!");
    }
}

function deleteTask(user, index) {
    if(validatesIndex(user, index)) return;
    user.tasks.splice(index, 1);
    console.log("----------------- Tarefa excluida com sucesso!");
}

// ---------------------------------- Início do código: ----------------------------------

let stopUserManager = false;
while (!stopUserManager) {
    switch (prompt("Escolha uma das opções:\n1 - Cadastro\n2 - Login\n3 - Sair do gerenciador de usuários")) {
        case "1":
            createUser(prompt("Digite seu nome de usuário:"), prompt("Digite sua senha:"));
            break;
        case "2":
            const user = login(prompt("Digite seu nome de usuário:"), prompt("Digite sua senha:"))
            if (user) {
                managerTasks(user);
            }
            break
        case "3":
            stopUserManager = true;
            break;
        default:
            console.log("Valor inválido!");
            break;
    }
}