import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = (props)=>{
    return(
        <div className={styles.div_screen}>
            <Link to="/home">
                <button className={styles.button} onClick={() => props.getcountries}>
                    HOME
                </button>
            </Link>
        </div>
    )
}

export default Landing;