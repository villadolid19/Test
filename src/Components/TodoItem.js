import React from "react";

export default function TodoItems({completed, id, title, toggleTodo, deleteTodo}) {
    return (
      <li>
        <lable>
          <input
            className="mr-1 rounded-md h-5 w-5"
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </lable>
        <button
          className="btn btn-danger ml-3 text-red-400"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </li>
    );
}

