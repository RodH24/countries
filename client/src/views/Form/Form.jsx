import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./Form.module.css";

const Form = () => {
  const countries = useSelector((state) => state.countries);
  const [form, setForm] = useState({
    countries: [],
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    selector: "",
  });

  const [options, setOptions] = useState([]);

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    selector: "",
    country: "",
    count: 0,
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const handleSelect = (id) => {
    if(id.target.checked){
        setForm({
            ...form,
            countries: [...form.countries, id.target.name],
          });
    }else{
        setForm({
            ...form,
            countries: form.countries.filter((item) => item !== id.target.name)
          });
    }
  };

  useEffect(() => {
  }, [errors])

  const validate = (form) => {
    const errorList = errors;
    if (form.name === "") {
      errorList.count++;
      errorList.name = "Agregue un nombre a la actividad"
    }
    else {
      errorList.count--;
      errorList.name = ""
    }
    if (form.difficulty === "") {
      errorList.count++;
      errorList.difficulty = "Seleccione una dificultad"
    }
    else {
      errorList.count--;
      errorList.difficulty = ""
    }
    if (form.duration === "") {
      errorList.count++;
      errorList.duration = "Seleccione una duracion"
    }
    else {
      errorList.count--;
      errorList.duration = ""
    }
    if (form.season === "") {
      errorList.count++;
      errorList.season = "Seleccione una temporada para la actividad"
    }
    else {
      errorList.count--;
      errorList.season = ""
    }
    if (form.countries.length === 0) {
      errorList.count++;
      errorList.country = "Agrege al menos un pais para la actividad"
    }
    else {
      errorList.count--;
      errorList.country = "";
    }
    setErrors(errorList)
  };

  const submitHandler = (event) => {
    validate(form);
    event.preventDefault();
    if (errors.count !== 0) {
      alert('Faltan datos en el formulario!')
    } else {
      axios
        .post("http://localhost:3001/pi/activities", form)
        .then((res) => alert("La actividad se creo correctamente"))
        .catch((err) => alert(err));
    }
  };

  return (
    <div className={style.div_screen}>
      <form onSubmit={submitHandler}>
        <div className={style.format}>
          <div>
            <label>Name: </label>
            <input
              className={style.format2}
              type="text"
              value={form.name}
              onChange={changeHandler}
              name="name"
            />
            <span>{errors.name}</span>
          </div>
          <div>
            <label>Difficulty: </label>
            <select
              className={style.format2}
              name="difficulty"
              onChange={changeHandler}
              value={form.difficulty}
            >
              <option value="">Elige una dificultad</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <span>{errors.difficulty}</span>
          </div>
          <div>
            <label>Duration: </label>
            <input
              className={style.format2}
              type="text"
              value={form.duration}
              placeholder="Escribir en formato hh:mm:ss"
              onChange={changeHandler}
              name="duration"
            />
            <span>{errors.duration}</span>
          </div>
          <div>
            <label>Season: </label>
            <select
              className={style.format2}
              name="season"
              onChange={changeHandler}
              value={form.season}
            >
              <option value="">Elige una temporada</option>
              <option value="winter">Invierno</option>
              <option value="spring">Primavera</option>
              <option value="summer">Verano</option>
              <option value="autumm">Otono</option>
            </select>
            <span>{errors.season}</span>
            </div>
            <div>
            <label>Country: </label>
            <input
              className={style.format2}
              type="text"
              placeholder="Busca el pais a agregar"
              onChange={(e) => {
                if(e.target.value.length){
                    setOptions(
                        countries.filter((item) =>
                          item.name
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase())
                        )
                      );
                }else {
                    setOptions([])
                }
            }}
            />
            {options.map((e) => (
              <>
                <input name={e.id} type="checkbox" defaultChecked={()=>form.countries.includes(e.id)} onClick={handleSelect} />
                {e.name}
              </>
            ))}
                        <span>{errors.country}</span>
          </div>
          <button className={style.button} type="submit">
            CREATE
          </button>
        </div>
        <Link to="/home"className={style.buttonBack}>Volver</Link>
      </form>
      <div className={style.footer}>Travels RodH24</div>
    </div>
  );
};

export default Form;
