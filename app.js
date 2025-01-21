// Task Management App

let tasks = [];

function addTask() {
    let task = prompt("Enter a new task:");
    if (task) {
        tasks.push(task);
        alert(`Task '${task}' added to the list.`);
    }
}


function viewTasks() {
    if (tasks.length === 0) {
        alert("No tasks available.");
    } else {
        let taskList = "Tasks:\n";
        for (let i = 0; i < tasks.length; i++) {
            taskList += `${i + 1}. ${tasks[i]}\n`;
        }
        alert(taskList);
    }
}

function deleteTask() {
    let index = prompt("Enter the task number to delete:");
    if (index) {
        index = parseInt(index) - 1; // Convert to zero-based index(This is very important)
        if (index >= 0 && index < tasks.length) {
            let removedTask = tasks.splice(index, 1);
            alert(`Task '${removedTask}' deleted from the list.`);
        } else {
            alert("Invalid task number.");
        }
    }
}
