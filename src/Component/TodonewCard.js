
/* eslint-disable */
import React, { useState } from 'react';
import './style.css';

const TodonewCard = ({
  todo,
  deleteTodo,
  updateStatus,
  editSelectedTodo,
  editTodo,
  updateTodo,
}) => {
  const [newStatus, setNewStatus] = useState(todo.status);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);


  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
    console.log(e.target.value);
    setNewStatus(todo.status === 'completed' ? 'not completed' : 'completed');
    updateStatus(todo.id, newStatus);
  };

  const handleEdit = () => {
    editSelectedTodo(todo);
  };

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      task,
      description,
    });
  };

  return (
    <div className="container">
      <p className="p1">Name : {todo.task}</p>
      <p className="p1">Description : {todo.description}</p>
      <p className="p1">Status: <select id="status" name="status" className="filter" value={todo.status}
                                    onChange={handleStatusChange}>
                                    <option value="not completed">Not Completed</option>
                                    <option value="completed">Completed</option>
                                </select></p>
                                <div className='button-container'>
      <button onClick={handleEdit} className="edit-button">Edit</button>
      {editTodo && editTodo.id === todo.id && (
        <div>
          <input
            type="text"
            placeholder="Task"
            value={task}
            className="subparent"
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            className="subparent"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate} className='updatebutton'>Update</button>
        </div>
      )}
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
      </div>
    </div>
  );
};

export default TodonewCard;
