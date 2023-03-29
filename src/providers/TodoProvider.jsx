import { createContext, useContext, useState } from "react";

export const todoContext = createContext()

const TodoProvider = (props) => {

    const [todoList, setTodoList] = useState([

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

    const toggleAllTodo = () => {
        const allCompleted = todoList.every(todo => todo.isComplated);
        const updatedTodos = todoList.map(todo => {
            return {
                ...todo,
                isComplated: !allCompleted
            };
        });
        setTodoList(updatedTodos);
    };

    function editItem(id, title) {
        setTodoList(prevList =>
            prevList.map(todo =>
                todo.id === id ? { ...todo, title } : todo
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
            removeTodo,
            clearComplatedTodo,
            toggleTodo,
            editItem,
            editTask,
            getNumberOfTodoItem,
            complatedItems,
            getItems,
            toggleAllTodo

        }}
        >{props.children}
        </todoContext.Provider>
    );
}



export default TodoProvider;