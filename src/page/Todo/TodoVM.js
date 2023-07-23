import { useEffect, useState } from "react"
import uuid from "../../util/uuid"
import { getTodo, setTodo } from "../../storage/TodoData"




const TodoVM = () => {
    const [list, setList] = useState([])

    useEffect(()=> {
        loadData()
    },[])

    const loadData = () => {
        setList(getTodo())
    }

    const addTodo = (title) => {

        let item = {
            id: uuid(),
            title: title,
            isDone: false
        }
        const data = [item, ...list]
        setList(data)
        setTodo(data)
    }

    const deleteTodo = (id) => {
        const data = list.filter(todo => todo.id !== id)
        setList(data)
        setTodo(data)
    }

    const updateTodo = (id, value) => {
        let updatedList = list.map(el => (el.id === id ? {...el, isDone: value} : el))
        sortList(updatedList)
    }

    const sortList = (updatedList) => {
        const sortedList = updatedList.sort((a, b) => (!b.isDone))
        setList(sortedList)
        setTodo(sortedList)
    }

    return {
        list: list,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo
    }
}

export default TodoVM