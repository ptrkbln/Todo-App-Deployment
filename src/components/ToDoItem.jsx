import React from "react";
import { useId } from "react";

export default function ToDoItem({ todo, handleToggle }) {
  const id = useId(); /* nur für ARIA-label/accessibility */

  return (
    <li>
      <div>
        <input type="checkbox" id={id} onChange={() => handleToggle(todo.id)} />
        <label
          htmlFor={id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "lightgray" : "black",
          }}
        >
          {" "}
          {todo.text}
        </label>
      </div>
      <button>Löschen</button>
    </li>
  );
}
