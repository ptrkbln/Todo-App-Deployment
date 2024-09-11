import React from "react";
import { useId } from "react";

export default function ToDoItem({ todo, handleToggle, handleClick }) {
  const id = useId(); /* nur für ARIA-label/accessibility */

  return (
    <li className="todo-item-li">
      <input type="checkbox" id={id} onChange={() => handleToggle(todo.id)} />
      <label
        htmlFor={id}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#555" : "black",
          /*           fontWeight: todo.completed ? "lighter" : "400", */
        }}
      >
        {todo.text}
      </label>
      <button className="delete-button" onClick={() => handleClick(todo.id)}>
        Löschen
      </button>
    </li>
  );
}
