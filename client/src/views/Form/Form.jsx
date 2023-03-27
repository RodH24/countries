import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Form = ()=>{
     
    const countries = useSelector(state => state.countries);
    const [form, setForm] = useState({
        idCountries: [],
        name:"",
        difficulty:"",
        duration:"",
        season: "",
        selector: ""
    })

    const [errors, setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season: "",
        selector: ""
    })

    // const pushCountry = (event) =>{
    //     const value = event.target.value;
    //     const aux = form.idCountries;
    //     aux.push(value);
    //     setForm({
    //         ...form,
    //         idCountries: aux
    //     })
    // }

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form, [property]:value})
        setForm({...form, [property]:value})
    }

    const handleSelect = (id) => {
        setForm({
            ...form,
            countries: [...form.idCountries, id.target.value]
        })
    }

    const handleDelete = (e) => {
        setForm({
            ...form,
            countries: form.idCountries.filter(c => c !== e)
        })
    }

    const validate = (form) => {
        if(form.name==="") setErrors({...errors, name:"Agregue un nombre a la actividad"})
        else setErrors({...errors, name:""})
        if(form.difficulty==="") setErrors({...errors, difficulty:"Agregue un nombre a la actividad"})
        else setErrors({...errors, difficulty:""})
        if(form.duration==="") setErrors({...errors, duration:"Agregue un nombre a la actividad"})
        else setErrors({...errors, duration:""})
        if(form.season==="") setErrors({...errors, season:"Agregue un nombre a la actividad"})
        else setErrors({...errors, season:""})
    }

    const submitHandler = (event) =>{
        event.preventDefault()
        axios.post("http://localhost:3001/pi/activities", form)
        .then(res=>alert("La actividad se creo correctamente"))
        .catch(err=>alert(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Difficulty: </label>
                <select name="difficulty" onChange={changeHandler} value={form.difficulty}>
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
                <input type="text" value={form.duration} placeHolder="Escribir en formato hh:mm:ss" onChange={changeHandler} name="duration" />
                <span>{errors.duration}</span>
            </div>
            <div>
                <label>Season: </label>
                <select name="season" onChange={changeHandler} value={form.season}>
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
                                <select onChange={handleSelect} required>
                                    <option value="" hidden>Select country</option>
                                    {countries.map(e => (
                                        <option value={e.id} name="countries" key={e.id} >{e.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <ul>
                                    <li>{form.idCountries.map(i =>
                                        <div>
                                            {i}
                                            <button onClick={() => handleDelete(i)} type="button">X</button>
                                        </div>)}</li>
                                </ul>
            </div>
            <button type="submit">CREATE</button>
            </div>
            <Link to="/home">Volver</Link>
        </form>
    )
}

export default Form;