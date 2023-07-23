import styles from "./Header.module.css"



const Header = ({text = "header"}) => {
    return(
        <h1 className={styles.header}>{text}</h1>
    )
}


export default Header