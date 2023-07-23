import styles from "./Todo.module.css"

import Header from "../../components/Header/Header"
import Item from "../../components/Item/Item"
import TodoVM from "./TodoVM"
import AddTodo from "../../components/AddTodo/AddTodo"




const Todo = () => {
    const { list, addTodo, deleteTodo, updateTodo } = TodoVM()


    return(
        <div className={styles.container}>
             <Header text="ToDo"/>
             <AddTodo
                addTodo={(todo) => {
                    addTodo(todo)
                }}
             />
             {
                list.map((item)=>(
                    <Item 
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        toggleStatus={updateTodo}
                        onDelete={deleteTodo}
                        isDone={item.isDone}
                    />
                ))
            }
        </div>
    )
}


export default Todo