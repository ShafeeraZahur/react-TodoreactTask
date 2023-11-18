
import React, { useState } from 'react';
import './style.css';


const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo({
        id: Date.now(),
        task,
        description,
      });
      setTask('');
      setDescription('');
    }
  };

  return (
    <div className="parent">
        <div className="center-heading">
                    <h2>My Todo</h2>
                </div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={task}
        id='one'
        className="subparent"
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        id='two'
        name="Description"
        className="subparent"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn">Add Todo</button>
    </form>
    </div>
  );
};

export default TodoForm;
