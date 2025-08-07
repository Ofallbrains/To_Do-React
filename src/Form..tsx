import React, {useState} from 'react'
import { IoAddCircle } from 'react-icons/io5';

interface Todo{
    id: number;
    text: string;
    completed: boolean;
}

export default function Form() {
    const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "IAmHere", completed: false },
    { id: 2, text: "reactjsexample.com", completed: false },
    { id: 3, text: "A To do app developed using to consolidate your knowledge about React", completed: false },
])


    
    return (
        <div>
            <h1>todos</h1>
            <div className='bg-blue-300 flex w-[400px] '>
                <input type="text" placeholder="Add todo" />
                <IoAddCircle size={24} />
            </div>
            <ul>

            </ul>
        </div>
    )
}