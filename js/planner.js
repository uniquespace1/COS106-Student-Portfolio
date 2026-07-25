function addTask() {

let input = document.getElementById("taskInput");

let task = input.value.trim();

if(task === ""){
    alert("Please enter a task.");
    return;
}

let li = document.createElement("li");

li.innerHTML = `
${task}
<button onclick="completeTask(this)">Complete</button>
<button onclick="deleteTask(this)">Delete</button>
`;

document.getElementById("taskList").appendChild(li);

input.value = "";

}

function completeTask(button){

button.parentElement.style.textDecoration = "line-through";

button.parentElement.style.color = "green";

}

function deleteTask(button){

button.parentElement.remove();

}
