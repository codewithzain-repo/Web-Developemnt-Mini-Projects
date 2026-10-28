
const title = document.querySelector("#title");
const addBtn = document.querySelector("#addBtn");
const display = document.querySelector(".display-todos");
const priority = document.querySelector("#priority");
const deadline = document.querySelector("#deadline");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Array se tasks webpage par show karna
function renderTasks() {
    display.innerHTML = "";

    tasks.forEach(function(task, index) {
        display.innerHTML += `
            <div class="task">

                <h3 class="task-title">${task.title}</h3>
                <p>Priority: ${task.priority}</p>
                <p>Deadline: ${task.deadline}</p>
                <button class="deleteBtn" data-index ="${index} ">Delete Task</button>
            </div>
        `;

        
    });
}


// Naya task add karna
addBtn.addEventListener("click", function() {

    if (title.value.trim() === "") {
        return;
    }

    let task = {

        title: title.value,
        priority: priority.value,
        deadline: deadline.value,

    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));


    renderTasks();

    title.value = "";
    priority.value = "low";
    deadline.value = "";
});



// Task complete karna ya delete karna
display.addEventListener("click", function(event) {

    if (event.target.classList.contains("deleteBtn")) {
       
        let index = Number(event.target.dataset.index);
        tasks.splice(index,1)
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks()

        
    }

    if (event.target.classList.contains("task-title")) {
        event.target.classList.toggle("completed");
    }

   
});


renderTasks()
