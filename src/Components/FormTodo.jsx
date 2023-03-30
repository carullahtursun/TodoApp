import { useState, useEffect, useContext } from 'react'

import { todoContext } from '../providers/TodoProvider'
function FormTodo() {
    // todoContext'ten gerekli fonksiyonları ve state'i alıyoruz
    const { addTodo, toggleAllTodo } = useContext(todoContext);

    // input alanındaki metni tutacak state
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
                {/* toggleAllTodo fonksiyonunu tetikleyen checkbox */}
                <input onClick={toggleAllTodo} type="checkbox" id="flowbite-option" value="" className="hidden peer" />
                <label htmlFor="flowbite-option" className="inline-flex items-center justify-center text-lg ml-1 h-7 w-7 text-gray-500 bg-white  border-gray-200 rounded-lg cursor-pointer  peer-checked:text-rose-500">
                    X
                </label>

                <form onSubmit={handleSubmit} className=' flex flex-row w-full justify-start'>
                    {/* kullanıcının girdiği metnin tutulduğu input alanı */}
                    <input value={title} onChange={handleChange} className='inset-px w-full border-spacing-0 p-3 placeholder:text-2xl placeholder:text-rose-100 outline-none ' placeholder='What neeeds to bedone ? ' type="text" />

                </form>
            </div>
        </div>
    )
}

export default FormTodo