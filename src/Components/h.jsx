/* import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoList = () => {
    const { todoList, toggleTodo, removeTodo, clearComplatedTodo } = useTodo();
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredTodos =
        filter === "active"
            ? todoList.filter((todo) => !todo.isComplated)
            : filter === "completed"
                ? todoList.filter((todo) => todo.isComplated)
                : todoList;

    return (
        <div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.isComplated}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span>{todo.title}</span>
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <span>{`${filteredTodos.length} items left`}</span>
                <div>
                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("active")}>Active</button>
                    <button onClick={() => setFilter("completed")}>Completed</button>
                </div>
                <button onClick={() => clearComplatedTodo()}>Clear completed</button>
            </div>
        </div>
    );
};

export default TodoList; */