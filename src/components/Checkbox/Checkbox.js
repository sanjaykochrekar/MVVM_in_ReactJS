import { useState } from "react"
import styles from "./CheckBox.module.css"



const CheckBox = ({value, onChange}) => {
    const [isChecked, setIsChecked] = useState(value)

    return(
        <div className={styles.container} 
            onClick={()=>{
                    // setIsChecked(!isChecked)
                    onChange(!value)
                }
            }
        >
            <div className={styles.dot}
                style={{
                    opacity: value ? "1" : "0",
                    transition: "all .2s",
                    visibility: value ? "visible" : "hidden"
                }}
            />
        </div>
    )
}


export default CheckBox