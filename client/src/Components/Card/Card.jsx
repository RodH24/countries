import { Link } from 'react-router-dom';
import style from "./Card.module.css";

function Card(props){
    const {id ,flag, name, code, continent, population} = props;


    return(
         <div className={`${style.Card}`}>
              <div className={`${style.countryImg}`}>
                   <h1>{flag}</h1>
              </div>
              <div>
                   <h3>{name}</h3>
                   {/* <p><span>Codigo: </span>{code}</p> */}
                   <p><span>Continente: </span>{continent}</p>
                   {/* <p><span>Población: </span>{population}</p> */}
                   <Link to={`/countries/${id}`} className={style.button}>Mas Informacion</Link>                    

                   
              </div>
         </div>
    )
};

export default Card;