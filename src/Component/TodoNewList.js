import React from 'react';
import TodonewCard from './TodonewCard';
import './style.css';


const TodonewList = ({
  todos,
  deleteTodo,
  updateStatus,
  editSelectedTodo,
  editTodo,
  updateTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="todo-card" key={todo.id}>
            
        <TodonewCard
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateStatus={updateStatus}
          editSelectedTodo={editSelectedTodo}
          editTodo={editTodo}
          updateTodo={updateTodo}
        />
        </div>
        
      ))}
    </div>
  );
};

export default TodonewList;
