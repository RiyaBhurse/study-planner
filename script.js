function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var todoList = document.getElementById("todoList");
    var todoTasks = document.createElement("p");
    var tickButton = document.createElement("h");

    todoTasks.textContent = taskText;
    tickButton.textContent = "✔️";

    tickButton.onclick = function () {
        moveTask(this.parentNode, document.getElementById("doneTasks"));
    };

    todoList.appendChild(todoTasks);
    todoTasks.appendChild(tickButton);

    taskInput.value = "";
}

// Function to move the task from TO DO to DONE list
function moveTask(task, destination) {
    var taskText = task.firstChild.textContent;
    var doneTask = document.createElement("li");
    doneTask.textContent = taskText;

    destination.appendChild(doneTask);
    task.parentNode.removeChild(task);
}
function enterLongTermGoal() {
    var longTermGoalInput = document.getElementById("longTermGoalInput");
    var longTermEnterButton = document.getElementById("longTermEnter");

    var longTermGoalText = longTermGoalInput.value;

    if (longTermGoalText.trim() !== "") {
        longTermGoalInput.style.display = "none";
        longTermEnterButton.style.display = "none";
    } else {
        alert("Please enter your long-term goal!");
    }
}

function enterLongTermGoal() {
    var longTermGoalInput = document.getElementById("longTermGoalInput");
    var longTermEnterButton = document.getElementById("longTermEnter");
    var longTermGoalText = document.getElementById("longTermGoalText");

    var enteredText = longTermGoalInput.value;

    if (enteredText.trim() !== "") {
        longTermGoalText.textContent = enteredText;
        longTermGoalInput.style.display = "none";
        longTermEnterButton.style.display = "none";
        longTermGoalText.style.display = "block";
    } else {
        alert("Please enter your long-term goal!");
    }
}

function enterTodayGoal() {
    var todayGoalInput = document.getElementById("todayGoalInput");
    var todayEnterButton = document.getElementById("todayEnter");
    var todayGoalText = document.getElementById("todayGoalText");

    var enteredText = todayGoalInput.value;

    if (enteredText.trim() !== "") {
        todayGoalText.textContent = enteredText;
        todayGoalInput.style.display = "none";
        todayEnterButton.style.display = "none";
        todayGoalText.style.display = "block";
    } else {
        alert("Please enter your today's goal!");
    }
}
function addWasteTime() {
    var wasteTimeInput = document.getElementById("wasteTimeInput");
    var wasteTimeList = document.getElementById("wasteTimeList");

    var enteredText = wasteTimeInput.value;

    if (enteredText.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = enteredText;
        wasteTimeList.appendChild(listItem);
        wasteTimeInput.value = ""; // Clear the input after adding to the list
    } else {
        alert("Please enter where you wasted time!");
    }

}