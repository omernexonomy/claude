import React, { useState, useEffect } from 'react';
import api from './api';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      const res = await api.get('/api/todos');
      setTodos(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    try {
      const res = await api.post('/api/todos', { text });
      setTodos([res.data, ...todos]);
    } catch (err) {
      setError('Failed to add todo.');
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      const res = await api.patch(`/api/todos/${id}`, { completed });
      setTodos(todos.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      setError('Failed to update todo.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await api.delete(`/api/todos/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      setError('Failed to delete todo.');
    }
  };

  const editTodo = async (id, text) => {
    try {
      const res = await api.patch(`/api/todos/${id}`, { text });
      setTodos(todos.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      setError('Failed to edit todo.');
    }
  };

  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Todo App</h1>
          {!loading && (
            <p className="stats">
              {remaining} of {todos.length} tasks remaining
            </p>
          )}
        </header>

        {error && <div className="error">{error}</div>}

        <AddTodo onAdd={addTodo} />

        {loading ? (
          <div className="loading">Loading todos...</div>
        ) : (
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
