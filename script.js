document.getElementById('addTaskBtn').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText) {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');

      li.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '刪除';
      deleteButton.addEventListener('click', function() {
          taskList.removeChild(li);
      });

      li.appendChild(deleteButton);
      taskList.appendChild(li);

      taskInput.value = ''; // 清空輸入框
  }
});
