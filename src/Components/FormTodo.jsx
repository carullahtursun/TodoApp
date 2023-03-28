import { useState, useEffect,useContext} from 'react'
import { AiOutlineCheck } from 'react-icons/Ai';
import { todoContext } from '../providers/TodoProvider'
function FormTodo() {

    const { addTodo } = useContext(todoContext);
    const [title, setTitle] = useState("");
    const [complete, setComplete] = useState(false);

    const handleChange = (e) => {
        setTitle(e.target.value)
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title)
        setTitle('')
        
    };

    return (
        <div>
            <div className=' flex border p-2  shadow '>
                <form onSubmit={handleSubmit} className=' flex flex-row w-full justify-start'>
                    <button className='btn w-1/12 ml-2 text-xl  '><AiOutlineCheck /></button>
                    <input value={title}  onChange={handleChange} className='inset-px w-full border-spacing-0 p-3 placeholder:text-2xl placeholder:text-rose-100 outline-none ' placeholder='What neeeds to bedone ? ' type="text" />
                    
                </form>
            </div>
        </div>
    )
}

export default FormTodo