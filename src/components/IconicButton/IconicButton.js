import Icons from "../../asset/Icons"
import styles from "./IconicButton.module.css"



const IconicButton = ({onClick=()=>{}, name="edit"}) => {
   
    return(
        <div className={styles.container} onClick={onClick}>
           <Icons name={name} color="#fff"/>
        </div>
    )
}


export default IconicButton