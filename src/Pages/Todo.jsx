import { useState, useEffect, useContext } from 'react'
import Footer from '../Components/Footer'
import FormTodo from '../Components/FormTodo'
import Todos from '../Components/Todos'
import TodoProvider from '../providers/TodoProvider'
import { todoContext } from '../providers/TodoProvider'
function Todo() {

  const { todoList, toggleTodo, removeTodo, clearComplatedTodo, getItems } = useContext(todoContext);
  const [filter, setFilter] = useState("all");

  const filteredTodos = getItems(filter)


  useEffect(() => {

  }, [filter])
  return (
    <>
        <FormTodo />
      <div className=' overflow-scroll shadow  bg-white'>
        {
          filteredTodos.map(todo => (
            <Todos todo={todo} key={todo.id} />

          ))
        }
      </div>
      <Footer setFilter={setFilter} filteredTodos={filteredTodos} />
    </>
  )
}

export default Todo