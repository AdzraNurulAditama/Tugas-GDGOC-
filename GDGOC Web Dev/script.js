function addTask() {
    const input = document.getElementById("tf-input").value;
    const task = document.createElement("li");
    task.textContent = input;
    task.id =
        new Date().valueOf().toString() +
        Math.random().toString(36).substring(2, 7);
    task.classList.add("list-item");

    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        deleteTask(task.id);
    });

    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", () => {
        const taskInput = document.getElementById("tf-input");
        const addTaskButton = document.querySelector(".button");

        taskInput.value = task.textContent.trim();
        taskInput.placeholder = "Edit a Task:"; // Ubah placeholder

        addTaskButton.textContent = "Edit Task";
        addTaskButton.onclick = function() {
            task.textContent = taskInput.value;
            task.appendChild(editButton);
            task.appendChild(deleteButton);

            addTaskButton.textContent = "Add Task";
            addTaskButton.onclick = addTask;

            taskInput.value = "";
            taskInput.placeholder = "Enter a task"; // Kembalikan placeholder
        };
    });

    task.appendChild(editButton);
    task.appendChild(deleteButton);
    document.getElementById("task-container").appendChild(task);
    document.getElementById("tf-input").value = "";
}

function deleteTask(id) {
    const task = document.getElementById(id);
    if (task) {
        task.remove();
    }
}