import { createContext, useContext, useState } from "react";

// Context API tanımlandı ve createContext() fonksiyonu ile todoContext adında bir context oluşturuldu.
export const todoContext = createContext()

// TodoProvider isimli bir fonksiyon bileşeni tanımlandı ve içerisinde todoList adında bir state, editTask adında bir state
const TodoProvider = (props) => {

    // todoList, setTodoList fonksiyonu ile birlikte useState() hook'u ile tanımlandı ve öntanımlı olarak boş bir array olarak atandı.
    const [todoList, setTodoList] = useState([
        {
            title:'Ödev Yapmak',
            isComplated:false,
            id:1,
        },
        {
            title:'Kitap Okumak',
            isComplated:true,
            id:2,
        },
        {
            title:'Sinemaya Gitmek',
            isComplated:false,
            id:3,
        }
    ])

    // getNumberOfTodoItem, todoList array'inin uzunluğunu döndürür ve toplam todo sayısını elde etmek için kullanılır.
    const getNumberOfTodoItem = todoList.length+1;
    // complatedItems, todoList array'indeki tamamlanmış todoları filtreleyerek elde edilen array'in uzunluğunu döndürür ve tamamlanmamış todo sayısını elde etmek için kullanılır.
    const complatedItems = todoList.filter(todo => todo.isComplated === false).length;



    // addTodo fonksiyonu, setTodoList fonksiyonunu kullanarak yeni bir todo öğesi ekler.
    const addTodo = (title) => {
        setTodoList([...todoList, { title, id: getNumberOfTodoItem, isComplated: false }])
    }

    // removeTodo fonksiyonu, setTodoList fonksiyonunu kullanarak bir todo öğesini todoList array'inden siler.
    const removeTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    // clearComplatedTodo fonksiyonu, setTodoList fonksiyonunu kullanarak tamamlanmış todoları todoList array'inden siler.
    const clearComplatedTodo = (todo) => {
        setTodoList(todoList.filter(todo => todo.isComplated !== true))
    }
    // toggleTodo fonksiyonu, setTodoList fonksiyonunu kullanarak bir todo öğesinin tamamlanmış mı değil mi olduğunu değiştirir.
    const toggleTodo = (id) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === id ? { ...todo, isComplated: !todo.isComplated } : todo
            )
        );
    };

    // toggleAllTodo fonksiyonu, setTodoList fonksiyonunu kullanarak tüm todoların tamamlanmış mı değil mi olduğunu değiştirir.
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

    // editItem fonksiyonu, setTodoList fonksiyonunu kullanarak bir todo öğesinin ismini günceller.
    function editItem(id, title) {
        setTodoList(prevList =>
            prevList.map(todo =>
                todo.id === id ? { ...todo, title } : todo
            )
        );
    }


    // getItems fonksiyonu, tip parametresine göre tüm todoları, tamamlanmamış todoları veya tamamlanmış todoları döndürür.
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
        // addTodo, removeTodo, clearComplatedTodo, toggleTodo, editItem, getNumberOfTodoItem, complatedItems, getItems, toggleAllTodo adında birer fonksiyon,
        // ve bir adet props parametresi alarak todoContext.Provider bileşeni ile sarmalandı.
        <todoContext.Provider value={{
            todoList,
            addTodo,
            removeTodo,
            clearComplatedTodo,
            toggleTodo,
            editItem,

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