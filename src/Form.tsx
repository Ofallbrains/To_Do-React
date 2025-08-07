import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";

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
        if (newTodo.trim() === '') {
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
        <div className='bg-red-900'>
            <div>
                <h1>todos</h1>
            </div>

            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Add todo...'
                />

                <button
                    onClick={addTodo}
                >   <IoIosAddCircle /></button>
            </div>

            <div>
                {todos.map((todo) => (
                    <div
                        key={todo.id}

                    >
                        <input
                            type='checked'
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}

                        />

                        <span
                            className={`flex-1 text-sm ${todo.completed
                                    ? 'text-gray-400 line-through'
                                    : 'text-gray-700'
                                }`}
                        >

                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}





export default Form;