import { useState, useContext } from 'react'
import { todoContext } from '../providers/TodoProvider'

function Footer({ setFilter,filter, filteredTodos }) {

    // todoContext'ten clearComplatedTodo ve complatedItems fonksiyonlarını ve değişkenini alıyoruz.
    const { clearComplatedTodo, complatedItems } = useContext(todoContext);


    return (
        <div className='flex flex-row w-full justify-between items-center p-1 rounded-b-xl  bg-white px-4'>
            <p className='text-gray-500 text-sm'>
                {complatedItems} item left
            </p>
            <div>
                <div className="inline-flex rounded-md  m-1" role="group">
                    <button onClick={() => setFilter('all')} type="button" className={`${filter == "all" ? ' border rounded-md px-3  border-gray-500  p-1 text-sm font-medium text-gray-500 ' :'p-1 text-sm font-medium text-gray-500 '} `}>
                        All
                    </button>
                    <button onClick={() => setFilter('active')} type="button" className={`${filter == "active" ? ' border rounded-md px-3 border-gray-500  p-1 text-sm font-medium text-gray-500 ' :'p-1 text-sm font-medium text-gray-500 '} `}>
                        Active
                    </button>
                    <button onClick={() => setFilter('completed')} type="button" className={`${filter == "completed" ? ' border rounded-md px-3 border-gray-500  p-1 text-sm font-medium text-gray-500 ' :'p-1 text-sm font-medium text-gray-500 '} `}>
                        Complated
                    </button>
                </div>
            </div>
            <div>

                <button onClick={clearComplatedTodo} className='text-gray-500 text-sm'>clear complated</button>

            </div>
        </div>
    )
}

export default Footer