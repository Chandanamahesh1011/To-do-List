document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            const timestamp = new Date().toLocaleString();
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="timestamp">${timestamp}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
            
            const deleteButton = listItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    }
});
