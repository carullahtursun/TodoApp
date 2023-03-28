import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Pages/Todo'
import TodoProvider from './providers/TodoProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-red-50  flex-col h-[100vh] flex justify-center items-center">
      <p className='text-7xl font-serif text-rose-200 mb-2'>TODOS</p>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  )
}

export default App
