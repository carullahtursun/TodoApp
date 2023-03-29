import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Pages/Todo'
import TodoProvider from './providers/TodoProvider'

function App() {


  return (
    <div className="App  bg-red-50  w-full h-[100vh] flex-col  flex justify-center items-center">
      <p className='text-7xl font-serif text-rose-200 mb-2'>TODOS</p>
      <div className='w-1/3 h-1/2 '>

        <TodoProvider>
          <Todo />
        </TodoProvider>
        <div className='flex py-6 text-gray-500 font-mono text-sm flex-col justify-end items-center'>
          <p>Click to edit a todo.
          </p>
          <p>
            Created by Carullah Tursun.
          </p>
          <p>
            <a href="https://github.com/carullahtursun/TodoApp" className='underline'>
              Click to access the source
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
