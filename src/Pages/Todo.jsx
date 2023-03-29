import { useState, useEffect, useContext } from 'react'
import Footer from '../Components/Footer'
import FormTodo from '../Components/FormTodo'
import Todos from '../Components/Todos'
import TodoProvider from '../providers/TodoProvider'
import { todoContext } from '../providers/TodoProvider'
function Todo() {
  // useContext hook'u ile todoContext'i alıyoruz
  const { todoList, toggleTodo, removeTodo, clearComplatedTodo, getItems } = useContext(todoContext);

  // State hook'u kullanarak filter'ı tutuyoruz
  const [filter, setFilter] = useState("all");

  // getItems fonksiyonunu kullanarak, filtrelenmiş todo listesini alıyoruz
  const filteredTodos = getItems(filter)


  useEffect(() => {
    // filter değiştiğinde yapılacak işlemler
  }, [filter])
  return (
    <>
      <FormTodo />
      <div className=' overflow-scroll max-h-[45vh] scrollbar-hide shadow  bg-white'>
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