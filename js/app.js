const btnSubmit = document.getElementById('submit-button');
const btnReset = document.getElementById('reset-button');
const inputItem = document.getElementById('add-item');
const listDisplay = document.getElementById('todo-list');
const form = document.querySelector('form');

form.addEventListener('reset', resetList);
form.addEventListener('submit', processItem);

listDisplay.addEventListener('click', removeItem);

function processItem(evt) {
  evt.preventDefault();
  if (inputItem.value != '') {
    const liItem = document.createElement('li');
    liItem.setAttribute('class','.remove');
    liItem.innerText = inputItem.value;
    listDisplay.appendChild(liItem);
    inputItem.value = '';
  }
};

function resetList(evt) {
  listDisplay.innerHTML = '';
};

function removeItem(evt) {
  evt.target.remove();
};