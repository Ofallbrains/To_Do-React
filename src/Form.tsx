import React, { useState } from 'react';
import { IoIosAddCircle, IoMdTrash } from "react-icons/io";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const Form: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'IAmHere', completed: false },
        { id: 2, text: 'reactjsexample.com', completed: false },
        { id: 3, text: 'A To do app developed using to consolidate your knowledge about React', completed: false }
    ])

    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = (): void => {
        if (newTodo.trim() !== '') {
            const todo: Todo = {
                id: Date.now(),
                text: newTodo.trim(),
                completed: false
            };
            setTodos([...todos, todo])
            setNewTodo('')
        }
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const deleteTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className='className="min-h-screen bg-gray-900 flex items-center justify-center p-4'>
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6">
            <div>
                <h1 className="text-6xl font-light text-gray-300 mb-2">todos</h1>
            </div>

            <div className="relative mb-6">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Add todo...'
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent pr-12"
                />

                <button
                    onClick={addTodo}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 hover:text-teal-600 focus:outline-none"
                >   <IoIosAddCircle /></button>
            </div>

            <div>
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <input
                            type='checked'
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                        />

                        <span
                            className={`flex-1 text-sm ${todo.completed
                                    ? 'text-gray-400 line-through'
                                    : 'text-gray-700'
                                }`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-400 hover:text-red-600 focus:outline-none p-1"
                        >
                            < IoMdTrash />
                        </button>
                    </div>
                ))}
            </div>

</div>
        </div>
    )
}



export default Form;