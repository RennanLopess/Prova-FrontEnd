// Array para armazenar as tarefas
let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

// Evento para adicionar tarefa ao clicar em botão
addTaskBtn.addEventListener("click", addTask);

// Evento para adicionar tarefa ao pressionar Enter no campo de input
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

// Função para adicionar uma tarefa
function addTask(){
    const text = taskInput.value.trim(); //Remove espaços em branco
    if(text === "")return;
    tasks.push({ text, completed: false});
    taskInput.value = "";
    renderTasks();
}

// Função para renderizar a lista de tarefas
function renderTasks(){
    taskList.innerHTML = ""; //Limpa a lista atual exibida
    // Contadores de tarefas
    let pendentes = 0;
    let concluidas = 0;

    // Percorre uma tarefa de cada vez
    tasks.forEach((task, index) => {
        // Cria o elemento <li> para tarefa
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        // Cria o span da tarefa que pode ser editada
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.contentEditable = true;
        taskText.className = "flex-grow-1 mx-2";

        // Aplica estilização se a tarefa estiver concluída
        if(task.completed){
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "gray";
            concluidas++;
        }else{
            pendentes++;
        }

        // Atualiza o texto da tarefa após edição
        taskText.addEventListener("blur", () => {
            tasks[index].text = taskText.textContent;
        });

        // Cria o CheckBox para marcar como concluída
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.className = "form-check-input me-2";

        // Altera o status da tarefa ao clicar em checkbox
        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            renderTasks();
        });

        // Cria o botão para excluir tarefa
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm ms-2";
        deleteBtn.textContent = "Excluir";
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        
        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        // Adiciona a lista ao item principal
        taskList.appendChild(li);
    });

    // Atualiza os contadores da interface
    pendingCount.textContent = `Pendentes: ${pendentes}`;
    completedCount.textContent = `Concluídas: ${concluidas}`;
}

