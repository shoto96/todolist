function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <div>
      <button class="btn btn-success btn-sm me-2" onclick="toggleComplete(this.parentElement.previousElementSibling)">
        <i class="bi bi-check"></i>
      </button>
      <button class="btn btn-danger btn-sm" onclick="removeTask(this)">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function removeTask(button) {
  button.parentElement.parentElement.remove();
}

function toggleComplete(element) {
  element.classList.toggle("completed");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}