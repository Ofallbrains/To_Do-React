
import { IoAddCircle } from 'react-icons/io5';

export default function Form() {
    return (
        <div>
            <h1>todos</h1>
            <div>
                <input type="text" placeholder="Add todo" />
             <IoAddCircle size={24} />
            </div>
       </div>
    )
}