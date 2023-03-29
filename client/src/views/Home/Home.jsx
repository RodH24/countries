import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCountries,
  getByName,
  setContinent,
  getSort,
  getActivities,
  setActivity,
} from "../../redux/actions";
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";
import Card from "../../Components/Card/Card";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const allcountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state)=>state.allActivities)
  const currentPage = useSelector((state) => state.currentPage);
  const sizePage = useSelector((state) => state.sizePage);
  const [sort, setsort] = useState("asc");
  const continent = useSelector((state) => state.continent);
  const countries = allcountries.slice(
    currentPage * sizePage,
    currentPage * sizePage + sizePage
  );

  useEffect(() => {
    if (country) {
      dispatch(getByName(country));
    } else {
      dispatch(getCountries());
      dispatch(getActivities());
    }
  }, [dispatch, country, continent]);

  const order = (value) => {
    dispatch(getSort(value));
    setsort(value);
  };

  const cambiarContinente = (e) => {
    dispatch(setContinent(e.target.value));
  };

  const cambiarActividad = (e) => {
    dispatch(setActivity(e.target.value));
  };

  return (
    <div className={style.div_screen}>
          <Paginate />
      <div className={`${style.container}`}>
        <div className={style.container}>
          <div>
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              name="searchCountry"
              placeholder="Buscar Pais"
              className={style.searchBar}
            />
          </div>
          <div className={style.divOptions}>
            <div>
              <button
                className={style.button}
                onClick={() => order({ isAsc: true, isByName: true })}
              >{`A -> Z`}</button>
              <button
                className={style.button}
                onClick={() => order({ isAsc: false, isByName: true })}
              >{`Z -> A`}</button>
              <button
                className={style.button}
                onClick={() => order({ isAsc: true, isByName: false })}
              >
                Poblacion Ascendente
              </button>
              <button
                className={style.button}
                onClick={() => order({ isAsc: false, isByName: false })}
              >
                Poblacion Descendente
              </button>
            </div>
            <div>
              <select
                onChange={cambiarContinente}
                name="continent"
                className={style.select}
              >
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
            <div>
              <select onChange={cambiarActividad} name="activity" className={style.select}>
                <option value="">Todas las actividades</option>
                {allActivities.map((e)=><option value={e.id}>{e.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className={style.container}>
          {countries.length > 0 ? (
            countries.map((country, index) => {
              // if(currentPage === 1 & index <10){
              return (
                <div className={style.containerCards}>
                  <Card
                    key={country.id}
                    id={country.id}
                    flag={country.flag}
                    code={country.id}
                    name={country.name}
                    continent={country.continent}
                    population={country.population}
                  />
                </div>
              );
              // }
              // else if(currentPage !== 1 && index >= ((currentPage-1)*10)-1 && (index < (currentPage*10)-1)){
              // return (<Card
              //   key={country.id}
              //   id = {country.id}
              //   flag={country.flag}
              //   code={country.code}
              //   name={country.nameSpanish}
              //   continent={country.continent}
              //   population={country.population}
              // />)}
            })
          ) : (
            <div>
              <p>No hay paises. Intenta otra busqueda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
