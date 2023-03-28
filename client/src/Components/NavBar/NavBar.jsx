import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return(
    <div className={styles.container}>
        <div className={styles.mainContainer}>
        <NavLink to="/">INICIO</NavLink>
        </div>
        <div className={styles.mainContainer}>
        <NavLink to="/form">NUEVA ACTIVIDAD</NavLink>
        </div>
    </div>
    )
}

export default NavBar;