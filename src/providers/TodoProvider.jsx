import { createContext, useContext, useState } from "react";

export const todoContext = createContext()

const TodoProvider = (props) => {

    const [todoList, setTodoList] = useState([
        { title: 'read a book', id: 0, isComplated: false },
        { title: 'read a s', id: 1, isComplated: false },
        { title: 'read a ook', id: 2, isComplated: true },
        { title: 'read a ok', id: 3, isComplated: false },

    ])

    const [editTask, setEditTask] = useState(null)
    const getNumberOfTodoItem = todoList.length;
    const complatedItems = todoList.filter(todo => todo.isComplated === false).length;

   

    const addTodo = (title) => {
        setTodoList([...todoList, { title, id: getNumberOfTodoItem, isComplated: false }])
    }

    const removeTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    const clearComplatedTodo = (todo) => {
        setTodoList(todoList.filter(todo => todo.isComplated !== true))
    }
    const toggleTodo = (id) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? { ...todo, isComplated: !todo.isComplated } : todo
            )
        );
    };

    const findItem = (id) => {
        const item = todoList.find(list => list.id === id)
        setEditItem(item)
    }

    const editItem = (title, id) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? { ...todo, title: title } : todo
            )
        );
    }

    const getItems = (type) => {
        switch (type) {
            case "all":
                return todoList;
            case "active":
                return todoList.filter((todo) => todo.isComplated !== true);
            case "completed":
                return todoList.filter((todo) => todo.isComplated === true);
            default:
                return todoList;
        }
    };


    return (
        <todoContext.Provider value={{
            todoList,
            addTodo,
            findItem,
            removeTodo,
            clearComplatedTodo,
            toggleTodo,
            editItem,
            editTask,
            getNumberOfTodoItem,
            complatedItems,
            getItems
        }}
        >{props.children}
        </todoContext.Provider>
    );
}



export default TodoProvider;