let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask(){
    const text = taskInput.value.trim();
    if(text === "")return;
    tasks.push({ text, completed: false});
    taskInput.value = "";
    renderTasks();
}

function renderTasks(){
    taskList.innerHTML = "";
    let pendentes = 0;
    let concluidas = 0;

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const taskText = document.createElement("span");
        taskText.textContent = task.text;
        taskText.contentEditable = true;
        taskText.className = "flex-grow-1 mx-2";
        if(task.completed){
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "gray";
            concluidas++;
        }else{
            pendentes++;
        }

        taskText.addEventListener("blur", () => {
            tasks[index].text = taskText.textContent;
        });

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.className = "form-check-input me-2";
        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            renderTasks();
        });

        const deleteBtn = 

    })
}

