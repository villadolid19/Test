import React from "react";
import TodoItems from "./TodoItem";

export default function TodoList({todos, toggleTodo, deleteTodo}){
    return (
      <ul className="list text-blue-100 mt-1 ml-4">
        {todos.length === 0 && "No Messages"}
        {todos.map((todo) => {
          return (
            <TodoItems 
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
}