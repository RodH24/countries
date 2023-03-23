import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {
    <div className={styles.mainContainer}>
        <Link to="/home">HOME</Link>
        <link to="/form">NUEVA ACTIVIDAD</link>
    </div>
}

export default NavBar;