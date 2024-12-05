function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskInput.value}</span>
        <span class="delete" onclick="deleteTask(this)">&#10006;</span>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleTask(task) {
    task.parentElement.classList.toggle("completed");
}

function deleteTask(task) {
    task.parentElement.remove();
}
