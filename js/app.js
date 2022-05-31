const btnSubmit = document.getElementById('submit-button');
const btnReset = document.getElementById('reset-button');
const inputItem = document.getElementById('add-item');
const listDisplay = document.getElementById('todo-list');

btnSubmit.addEventListener('click', processItem);
btnReset.addEventListener('click', resetList);

inputItem.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  if (evt.key === 'Enter') {
    processItem();
  }
});

function processItem(evt) {
  if (inputItem.value != '') {
    const liItem = document.createElement('li');
    liItem.innerText = inputItem.value;
    listDisplay.appendChild(liItem);
    inputItem.value = '';
  }
};

function resetList(evt) {
  listDisplay.innerHTML = '';
};
