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
                saveTasks(); // Save tasks after removal
            };

            listItem.appendChild(button);
            taskList.appendChild(listItem);

            taskInput.value = '';
            saveTasks(); // Save tasks after addition
        }
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(item => {
            tasks.push(item.textContent.replace('Remove', '').trim());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            const button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');
            button.onclick = function () {
                taskList.removeChild(listItem);
                saveTasks(); // Save tasks after removal
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

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
