import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getByName, setContinent } from "../../redux/actions";
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate"
import Card from "../../Components/Card/Card"
import style from "./Home.module.css"

const Home = ()=>{

    const dispatch = useDispatch();
    const [country, setCountry] = useState('');
    const [order, setOrder] = useState('AZ');
    const countries = useSelector ((state) => state.countries)
    const [currentPage]= useState(1)
    // const [charactersPerPage]=useState(10)
    // const indexOfLastCharacter = currentPage * charactersPerPage
    // const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    // const currentCharacters = countries.slice(indexOfFirstCharacter, indexOfLastCharacter)
    const continent = useSelector(state => state.continent);

    useEffect(()=>{      
        if(country){
          dispatch(getByName(country));
        }else{
          dispatch(getCountries(order));
        }
      },[dispatch,country, order, continent]);
      
      const cambiarContinente = (e) =>{
        dispatch(setContinent(e.target.value));
      }  
    
      return (
        <div className={style.div_screen}>
        <div className={`${style.container}`}>
              <div className={style.container}>
                  <div>
                    <input onChange={(e)=> setCountry(e.target.value)} type="text" name="searchCountry" placeholder="Buscar Pais" className={style.searchBar}/>
                  </div>
                  <div className={style.divOptions}>
                    <div>
                      <button className={style.button} onClick={()=> setOrder('AZ')}>{`A -> Z`}</button>         
                      <button className={style.button} onClick={()=> setOrder('ZA')}>{`Z -> A`}</button>         
                      <button className={style.button} onClick={()=> setOrder('PLtoH')}>Poblacion Ascendente</button>         
                      <button className={style.button} onClick={()=> setOrder('PHtoL')}>Poblacion Descendente</button>
                    </div>
                    <div>
                      <select onChange={cambiarContinente} name="continent" className={style.select}>
                        <option value="">Todos los Continentes</option>
                        <option value="Africa">Africa</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                        <option value="Oceania">Oceania</option>
                      </select>                         
                    </div>
    
                  </div>
          </div>
    
          <div className={style.container}>
            {countries.length > 0 ? countries.map((country, index) =>{
            if(currentPage === 1 & index <10){
              return (<div className={style.containerCards}><Card
                key={country.id} 
                id = {country.id}
                flag={country.flag}
                code={country.id}
                name={country.name}
                continent={country.continent}  
                population={country.population}      
              /></div>)
            }
            else if(currentPage !== 1 && index >= ((currentPage-1)*10)-1 && (index < (currentPage*10)-1)){
              return (<Card
                key={country.id} 
                id = {country.id}
                flag={country.flag}
                code={country.code}
                name={country.nameSpanish}
                continent={country.continent}  
                population={country.population}      
              />)}}): 
              <div>
                <p>No hay paises. Intenta otra busqueda.</p>
              </div>}
          </div>
    
          <div>
            <Paginate countriesLength={countries.length}/>
          </div>
        </div>
        </div>
      )
    };

export default Home;