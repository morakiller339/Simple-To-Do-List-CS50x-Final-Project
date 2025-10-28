// Get references to the input box and task list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!"); // Alert if input is empty
    } else {
        // Create a new list item for the task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Set the task text
        listContainer.appendChild(li); // Add the task to the list

        // Create a delete button (span) for the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // "×" symbol for delete
        li.appendChild(span); // Add the delete button to the task
    }
    inputBox.value = ""; // Clear the input box
    saveData(); // Save the updated task list to local storage
}

// Event listener for handling task interactions
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class to mark/unmark a task as completed
        e.target.classList.toggle("checked");
        saveData(); // Save the updated task list to local storage
    } else if (e.target.tagName === "SPAN") {
        // Remove the task if the delete button is clicked
        e.target.parentElement.remove();
        saveData(); // Save the updated task list to local storage
    }
}, false);

// Function to save the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load and display tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load tasks when the page is opened
showTask();
