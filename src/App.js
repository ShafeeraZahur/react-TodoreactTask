import React, { useState } from 'react';
import TodoForm from './Component/TodoForm';
import TodonewList from './Component/TodoNewList';
import './style.css';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, status: 'not completed' }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateStatus = (id, status) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: status } : todo
      )
    );
  };

  const editSelectedTodo = (todo) => {
    setEditTodo(todo);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo
      )
    );
    setEditTodo(null);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.status === 'completed';
    } else {
      return todo.status === 'not completed';
    }
  });

  return (
    <div className="parent">
      <TodoForm addTodo={addTodo} />

      <div className="todos-heading">
                <h2 className="card-heading">My Todos</h2>
        <label>
           Filter:
          <select
            value={filter}
            className="filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </label>
      </div>
      <TodonewList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        updateStatus={updateStatus}
        editSelectedTodo={editSelectedTodo}
        editTodo={editTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
