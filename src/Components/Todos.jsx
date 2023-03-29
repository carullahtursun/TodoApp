import { useState, useContext, useEffect } from 'react'
import { todoContext } from '../providers/TodoProvider'
function Todos({ todo }) {

    const { removeTodo, toggleTodo, editItem } = useContext(todoContext);



    function handleInputChange(event) {
        const newTitle = event.target.value;
        editItem(todo.id, newTitle);
    }
    return (
        <div className='flex flex-row ' >
            <form className='w-full ' action="">
                <div className=" border-b border-t p-1 w-full">
                    <div className=" relative flex  px-1 items-center justify-center">

                        <div className="flex w-10 items-center justify-center rounded-tl-lg ">
                            <input onClick={() => toggleTodo(todo.id)} type="checkbox" checked={todo.isComplated} className="  w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600    " />
                        </div>
                        <input
                            type='text'
                            defaultValue={todo.title}
                            onChange={handleInputChange}
                            className={`${todo.isComplated ? 'line-through text-slate-500' : ''
                                } w-full focus:border p-4 focus:shadow bg-white pl-2 text-base font-semibold outline-0`}
                            placeholder='hello'
                        />
                    </div>
                </div>
            </form>
            <button onClick={() => removeTodo(todo.id)} className='hover:text-rose-400 text-lg text-rose-300 mr-4'>x</button>

        </div>
    )
}

export default Todos