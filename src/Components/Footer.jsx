import { useState  ,useContext} from 'react'
import { todoContext } from '../providers/TodoProvider'

function Footer({setFilter}) {

    const { clearComplatedTodo ,complatedItems } = useContext(todoContext);
    return (
        <div className='flex flex-row w-full justify-between items-center p-3'>
            <p className='text-gray-500 text-sm'>
                {complatedItems} item left
            </p>
            <div>
                <div className="inline-flex rounded-md  m-1" role="group">
                    <button onClick={()=>setFilter('all')} type="button" className="p-1 text-sm font-medium text-gray-500 bg-white rounded-l-lg">
                        All
                    </button>
                    <button onClick={()=>setFilter('active')} type="button" className="p-1 text-sm font-medium text-gray-500  bg-white ">
                        Active
                    </button>
                    <button onClick={()=>setFilter('completed')} type="button" className="p-1 text-sm font-medium text-gray-500  bg-white  rounded-r-md ">
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