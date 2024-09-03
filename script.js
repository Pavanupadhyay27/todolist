function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const ul = document.getElementById('taskList');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
        li.classList.toggle('completed');
    };

    const textNode = document.createTextNode(taskText);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => {
        ul.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(deleteButton);
    
    ul.appendChild(li);

    input.value = '';
}
