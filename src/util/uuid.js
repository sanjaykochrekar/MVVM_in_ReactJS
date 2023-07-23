import { getLastId, setLastId } from "../storage/TodoData"


export default function(prefix='id') {
    let lastId = getLastId()
    lastId++
    setLastId(lastId)
    return `${prefix}${lastId}`
}