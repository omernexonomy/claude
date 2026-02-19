import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const trimmed = editText.trim();
    if (!trimmed) return;
    onEdit(todo._id, trimmed);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-item__checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id, !todo.completed)}
      />

      {isEditing ? (
        <form className="todo-item__edit-form" onSubmit={handleEditSubmit}>
          <input
            className="todo-item__edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit" className="todo-item__btn todo-item__btn--save">
            Save
          </button>
          <button
            type="button"
            className="todo-item__btn todo-item__btn--cancel"
            onClick={handleEditCancel}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className="todo-item__text">{todo.text}</span>
          <div className="todo-item__actions">
            <button
              className="todo-item__btn todo-item__btn--edit"
              onClick={() => setIsEditing(true)}
              disabled={todo.completed}
              title="Edit"
            >
              Edit
            </button>
            <button
              className="todo-item__btn todo-item__btn--delete"
              onClick={() => onDelete(todo._id)}
              title="Delete"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
