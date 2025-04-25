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
    
}
