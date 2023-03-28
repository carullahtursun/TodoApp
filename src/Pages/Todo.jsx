import { useState, useEffect, useContext } from 'react'
import Footer from '../Components/Footer'
import FormTodo from '../Components/FormTodo'
import Todos from '../Components/Todos'
import TodoProvider from '../providers/TodoProvider'
import { todoContext } from '../providers/TodoProvider'
function Todo() {

  const { todoList, toggleTodo, removeTodo, clearComplatedTodo ,getItems} = useContext(todoContext);
  const [filter, setFilter] = useState("all");

  const filteredTodos = getItems(filter)

 
  useEffect(()=>{

  },[filter])
  return (
    <div className=' w-1/3 rounded-lg shadow bg-white'>
      <FormTodo />
      {
        filteredTodos.map(todo => (
          <Todos todo={todo} key={todo.id} />

        ))
      }
      <Footer setFilter={setFilter} />
    </div>
  )
}

export default Todo