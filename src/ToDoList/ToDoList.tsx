import { useState } from 'react';
import './ToDoList.css';

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, input]);
    setInput('');
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List 📝</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add your task"
        />
        <button className="add-btn" onClick={addTask}>ADD</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span className="delete" onClick={() => deleteTask(index)}>✖</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
