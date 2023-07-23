import styles from "./Item.module.css"

import CheckBox from "../Checkbox/Checkbox"
import IconicButton from "../IconicButton/IconicButton"



const Item = ({ title, isDone , id, toggleStatus, onDelete }) => {
    

    const titleStyle = {textDecoration: isDone ? 'line-through' : "none"}


    return(
        <div className={styles.container}>
            <CheckBox value={isDone} onChange={(value)=> {
                toggleStatus(id, value)
            }}/>
            <h3 className={styles.title} style={titleStyle}>
                {title}
            </h3>
            <IconicButton name={"delete"} onClick={() => onDelete(id)}/>
        </div>
    )
}


export default Item