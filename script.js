document.addEventListener('DOMContentLoaded', function (event) {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Enter a task')
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            const button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');
            button.onclick = function () {
                taskList.removeChild(listItem);
            };

            listItem.append(button);

            taskList.append(listItem);

            taskInput.value = '';

        }
    }
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })
    addTask();
})