let catchTaskClick = document.querySelector('#addTaskBtn');
let userInput = document.querySelector('#taskInput');
let todoContainer = document.getElementById('todoContainer');
let doneContainer = document.getElementById('doneContainer');
let count = 0;

catchTaskClick.addEventListener("click", () => addTaskDiv(userInput.value));

// Need to add listener to grab clicked divs
newDiv.addEventListener('click', moveCompletedTasks(newDiv.id));

const addTaskDiv = (input) => {
  let newDiv = document.createElement('div');
  newDiv.id = `${count}:${input}`;
  newDiv.innerHTML = `${count}: ${input}`;
  todoContainer.appendChild(newDiv);
  count++;
  userInput.value = '';
}

const moveCompletedTasks = (taskToMove) => {
  let taskParent = taskToMove.parentElement.nodeName;
  console.log(`newDivId is -> ${taskToMove}`)}
//   if ( taskParent === 'todoContainer' ) { doneContainer.appendChild(taskToMove);
//   } else {
//     todoContainer.appendChild(taskToMove)
//   }
// }
