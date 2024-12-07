let tasks = [];
const screenElement = document.querySelector('.screen');

function playTypingSound() {
  const audio = new Audio('audio/typing-sound.mp3');
  audio.loop = true;
  audio.play();
  setTimeout(() => audio.pause(), 5000);
}

function lightUpScreen(isLightUp) {
  screenElement.style.boxShadow = isLightUp ? "0 0 20px 10px #0f0" : "none";
}

function addTask() {
  const taskName = prompt("Enter task name:");
  const taskDate = prompt("Enter task date (YYYY-MM-DD):");
  const taskTime = prompt("Enter task time (HH:MM):");
  if (!taskName || !taskDate || !taskTime) {
    alert("All fields are required.");
    return;
  }
  tasks.push({ name: taskName, date: taskDate, time: taskTime });
  alert(`Task "${taskName}" added successfully!`);
  playTypingSound();
}

function viewTasks() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>Your Tasks:</h3>";
  if (tasks.length === 0) {
    outputDiv.innerHTML += "<p>No tasks available.</p>";
    return;
  }
  tasks.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
    .forEach((task, index) => {
      outputDiv.innerHTML += `<p>${index + 1}. ${task.date} ${task.time} - ${task.name}</p>`;
    });
}

function deleteTask() {
  const taskNumber = prompt("Enter the task number to delete:");
  const taskIndex = parseInt(taskNumber, 10) - 1;
  if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
    alert("Invalid task number.");
    return;
  }
  const removedTask = tasks.splice(taskIndex, 1);
  alert(`Task "${removedTask[0].name}" deleted successfully!`);
  playTypingSound();
}

setInterval(() => {
  const now = new Date();
  tasks.forEach((task) => {
    const taskTime = new Date(`${task.date}T${task.time}`);
    if (taskTime - now <= 300000 && taskTime - now > 0) {
      lightUpScreen(true);
      setTimeout(() => lightUpScreen(false), 5000);
    }
  });
}, 60000);
