import { useState } from "react"
import styles from "./AddTodo.module.css"



const AddTodo = ({addTodo}) => {

    const [todo, setTodo] = useState("")



    return(
        <div className={styles.container}>
            <input 
                className={styles.input} 
                autoCapitalize="sentences"
                value={todo} 
                onInput={e => setTodo(e.target.value)}
            />
            <button 
                onClick={()=>{
                    if (todo.length > 0) {
                        addTodo(todo)
                        setTodo("")
                    } else {
                        alert("Enter a todo")
                    }
                }} 
                className={styles.addButton} title="Add"
            >
                <p className={styles.title}>Add</p>
            </button>
        </div>
    )
}


export default AddTodo