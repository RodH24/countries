import axios from "axios";

const url = 'http://localhost:3001/pi/';

export const GET_COUNTRIES = "GET_COUNTRIES";
export const getCountries = () =>{
    return async function (dispatch){
        const apiData = await axios.get(`${url}/countries`);
        const countries = apiData.data;
        dispatch({ type:GET_COUNTRIES, payload: countries });
    };
};

export const GET_PAGES = "GET_PAGES";
export const getPages = ({sizePage, currentPage}) =>{ 
    return async function (dispatch){ 
    dispatch({ type: GET_PAGES, payload: {sizePage, currentPage}});
};
};

export const GET_BY_NAME = "GET_BY_NAME";
export const getByName = (name) =>{
    return async function (dispatch){
        const res = await axios.get(`${url}/countries?name=${name}`);
        const nameCountry = res.data;
        dispatch({type:GET_BY_NAME, payload: nameCountry});
    };
};
