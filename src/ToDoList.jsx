import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null); 
  const [editTask, setEditTask] = useState("");

  function HandleEditChange(event) {
    setEditTask(event.target.value);
  }

  
  function SaveEdit(index) {
    const updatedTasks = tasks.map((task, i) => (i === index ? editTask : task));
    setTask(updatedTasks);
    setIsEditing(null);
    setEditTask(""); 
  }

  function EditTask(index) {
    setIsEditing(index); 
    setEditTask(tasks[index]); 
  }

  function HandleInputChange(event) {
    setNewTask(event.target.value);
  }

  function AddTask() {
    if (newTask.trim() !== "") {
      setTask(t => [...t, newTask]);
      setNewTask(""); 
    }
  }

  function DeleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  return (
    <div className="Container">
      <h1>To-Do List by Alok</h1>
      <h2>Add your day to day work</h2>
      <input
        id="in-box"
        type="text"
        value={newTask}
        placeholder="Add new task..."
        onChange={HandleInputChange}
      />
      <button id="Add-btn" onClick={AddTask}>
        Add
      </button>
      <ol id="List-item">
        {tasks.map((task, index) => (
          <li key={index}>
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={HandleEditChange}
                />
                <button onClick={() => SaveEdit(index)}>Save</button>
              </>
            ) : (
              <span className="text">
                {task}{" "}
                <button
                  id="Delete-btn"
                  onClick={() => DeleteTask(index)}
                >
                  Delete
                </button>
                <button id="Edit-btn" onClick={() => EditTask(index)}>Edit</button>
              </span>
            )}
          </li>
        ))}
      </ol>
      
    </div>
    <p>&copy; 2024</p>
  );
}

export default ToDoList;
