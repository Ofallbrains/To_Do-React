import React, { useState } from 'react';

interface Todo{
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

    
    return (
        <h1>wow</h1>
    )
}





export default Form;