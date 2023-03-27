import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import {getDetail} from '../../redux/actions'
import style from './Detail.module.css';

function Detail(){
    // Hook de react-router-dom que lee los params. match.params.id
    const {id} = useParams();
    const country = useSelector(state => state.details);
    const dispatch = useDispatch();

    // Al construirse, se despacha el getCountryId( id pasado por Params)
    useEffect(()=>{    
         dispatch(getDetail(id));
    },[dispatch, id])

    return(
         <div className={`${style.cardInfo}`}>
              <div>
                   <h1>{country.flag}</h1>
              </div>
              <div className={`${style.info}`}>
                   <p>Nombre: <span>{country.name}</span></p>
                   <p>Codigo: <span>{country.id}</span></p>
                   <p>Capital: <span>{country.capital}</span></p>
                   <p>Poblacion: <span>{country.population}</span></p>
                   <p>Continente: <span>{country.continent}</span></p>
                   <p>Subregion: <span>{country.subregion}</span></p>
                   <p>Area: <span>{country.area}</span></p>
                        <h3>Actividades turisticas</h3>
                   <div className={style.activities}>
                        
                        {country.Activities ? country.Activities.map(activity => {
                             return (<div key={activity.id} className={style.activity}>
                                  <p>Nombre: <span>{activity.name}</span></p>
                                  <p>Dificultad: <span>{activity.difficulty}</span></p>
                                  <p>Duracion: <span>{activity.duration}</span></p>
                                  <p>Temporada: <span>{activity.season}</span></p>
                             </div>)
                        }) : <>
                                  <p>No hay actividades</p>
                             </>}
                   </div>
              </div>
              <Link to="/home" className={style.button}>Volver</Link>
         </div>
    )
}

export default Detail;