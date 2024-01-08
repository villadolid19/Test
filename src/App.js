import React, { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "./Components/NewTodoFrom";
import TodoList from "./Components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) {
      return [];
    } else{
      return JSON.parse(localValue);
    }
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function AddTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  console.log(todos);

  return (
    <div className="max-w-md mb-8 mt-2 rounded-xl mx-auto bg-gray-700 bg-opacity-60 shadow-md overflow-hidden md:max-w-2xl p-3">
      <NewTodoForm onSubmit={AddTodo} />
      <h1 className="header text-2xl text-white">Messages List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

