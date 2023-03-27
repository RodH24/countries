import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div>
    {/* <div>
        <NavLink to="/"></NavLink>        
    </div> */}
    <div>
        <NavLink to="/">INICIO</NavLink>
        <NavLink to="/form">NUEVA ACTIVIDAD</NavLink>
    </div>
    </div>
    )
}

export default NavBar;