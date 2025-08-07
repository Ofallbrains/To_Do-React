import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "IAmHere", completed: false },
    { id: 2, text: "reactjsexample.com", completed: false },
    { id: 3, text: "A To do app developed using to consolidate your knowledge about React", completed: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-6xl font-bold text-gray-200 text-center mb-8 select-none">todos</h1>
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-full flex items-center justify-center"
            onClick={addTodo}
            aria-label="Add todo"
          >
            <span className="text-2xl font-bold">+</span>
          </button>
        </div>
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="mr-3 accent-teal-500"
                />
                <span className={
                  `text-gray-700 ${todo.completed ? "line-through" : ""}`
                }>{todo.text}</span>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete todo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}