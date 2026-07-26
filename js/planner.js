const form=document.getElementById("taskForm");
const input=document.getElementById("taskInput");
const list=document.getElementById("taskList");

form.addEventListener("submit",function(e){

e.preventDefault();

if(input.value.trim()=="") return;

const li=document.createElement("li");

li.innerHTML=`
<span>${input.value}</span>

<button class="done">✓</button>

<button class="delete">🗑</button>
`;

list.appendChild(li);

input.value="";

});

list.addEventListener("click",function(e){

if(e.target.classList.contains("done")){

const text=e.target.parentElement.querySelector("span");

text.style.textDecoration="line-through";

text.style.color="green";

}

if(e.target.classList.contains("delete")){

e.target.parentElement.remove();

}

});
