import { useState, useEffect, useContext } from 'react'
import { AiOutlineCheck } from 'react-icons/Ai';
import { todoContext } from '../providers/TodoProvider'
function FormTodo() {

    const { addTodo, toggleAllTodo } = useContext(todoContext);
    const [title, setTitle] = useState("");


    const handleChange = (e) => {
        setTitle(e.target.value)

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(title)
        setTitle('')
    };

    return (
        <div className=''>
            <div className=' rounded-t-xl sticky top-0 bg-white flex flex-row border p-2 justify-center items-center  shadow '>
                <input onClick={toggleAllTodo} type="checkbox" id="flowbite-option" value="" className="hidden peer" />
                <label htmlFor="flowbite-option" className="inline-flex items-center justify-center ml-1 h-7 w-7 text-gray-500 bg-white  border-gray-200 rounded-lg cursor-pointer  peer-checked:text-rose-500">
                    <AiOutlineCheck className='text-2xl' />
                </label>

                <form onSubmit={handleSubmit} className=' flex flex-row w-full justify-start'>
                    <input value={title} onChange={handleChange} className='inset-px w-full border-spacing-0 p-3 placeholder:text-2xl placeholder:text-rose-100 outline-none ' placeholder='What neeeds to bedone ? ' type="text" />

                </form>
            </div>
        </div>
    )
}

export default FormTodo