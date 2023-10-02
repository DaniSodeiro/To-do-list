/* eslint-disable react/prop-types */
import { useState } from "react";

const Todo = ({ todo, completeTodo, editTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, updatedText);
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        {isEditing ? (
          <input type="text" value={updatedText} onChange={handleTextChange} />
        ) : (
          <p>{todo.text}</p>
        )}
        <p className="category">({todo.category})</p>
      </div>
      <div>
        {isEditing ? (
          <>