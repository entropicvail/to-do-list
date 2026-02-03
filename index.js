function addCheckbox() {
  const inputValue = document.getElementById('toDoInput').value.trim();
  if (inputValue === '') {
      alert('Please enter a "To-do" item.');
      return;
  }

  const checkboxArea = document.getElementById('checkboxArea');
  const checkboxId = `checkbox_${Date.now()}`; // Unique ID for each checkbox button and its label

  // Create input element
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = checkboxId;
  input.name = 'dynamicOptions'; // All must share the same name
  input.value = inputValue;

  // Create label element and link it to the input
  const label = document.createElement('label');
  label.htmlFor = checkboxId;
  label.textContent = inputValue;

  // Append input and label (wrapped in a div for layout) to the container
  const wrapper = document.createElement('div');
  wrapper.appendChild(input);
  wrapper.appendChild(label);
  checkboxArea.appendChild(wrapper);

  localStorage.setItem(JSON.stringify(checkboxId), wrapper);

  importLocalStorageToDiv(checkboxId);

  // Clear input field
  document.getElementById('toDoInput').value = '';
}

function importLocalStorageToDiv() {
  const storedValues = Object.keys(localStorage);
  const displayDiv = document.getElementById('checkboxArea');
  if (storedValues) {
    displayDiv.innerHTML = storedValues;
    console.log("Content loaded from localStorage.");
  } else {
    displayDiv.innerHTML = "No saved content found in localStorage.";
    console.log("No content to load.");
  }
}

window.onload = function() {
  importLocalStorageToDiv()
}

function clearToDo() {
  localStorage.clear();
  console.log('localStorage cleared...')
}