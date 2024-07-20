document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Enter a task');
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');
            button.onclick = function () {
                taskList.removeChild(listItem);
                addTasks(); // Save tasks after removal
            };

            listItem.appendChild(button);
            taskList.appendChild(listItem);

            taskInput.value = '';
            addTasks(); // Save tasks after addition
        }
    }

    // Function to save tasks to Local Storage
    function addTasks() {
        const storedTasks = [];
        taskList.querySelectorAll('li').forEach(item => {
            storedTasks.push(item.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('storedTasks', JSON.stringify(storedTasks));
    }

    // Function to load storedTasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('storedTasks')) || [];
        storedTasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            const button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');
            button.onclick = function () {
                taskList.removeChild(listItem);
                addTasks(); // Save storedTasks after removal
            };

            listItem.appendChild(button);
            taskList.appendChild(listItem);
        });
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener for the "Enter" key press in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load storedTasks from Local Storage when the page loads
    loadTasks();
});
