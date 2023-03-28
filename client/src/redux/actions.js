import axios from "axios";


export const GET_COUNTRIES = "GET_COUNTRIES";
export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/pi/countries`);
    const countries = apiData.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const GET_PAGES = "GET_PAGES";
export const getPages = ({ sizePage, currentPage }) => {
  return async function (dispatch) {
    dispatch({ type: GET_PAGES, payload: { sizePage, currentPage } });
  };
};

export const GET_BY_NAME = "GET_BY_NAME";
export const getByName = (name) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://localhost:3001/pi/countries?name=${name}`
      );
      const nameCountry = res.data;
      dispatch({ type: GET_BY_NAME, payload: nameCountry });
    } catch (error) {
      dispatch({ type: GET_BY_NAME, payload: [] });
    }
  };
};

export const GET_DETAIL = "GET_DETAIL";
export const getDetail = (id) => {
  return async function (dispatch) {
    const detail = await axios.get(`http://localhost:3001/pi/countries/${id}`);
    const idCountry = detail.data;
    dispatch({ type: GET_DETAIL, payload: idCountry });
  };
};

export const SET_CONTINENT = "SET_CONTINENT";
export const setContinent = (continent) => {
  return async function (dispatch) {
    dispatch({ type: SET_CONTINENT, payload: continent });
  };
};

export  const SET_ACTIVITY = "SET_ACTIVITY";
export const setActivity = (activity) => {
  return async function (dispatch) {
    dispatch({ type: SET_ACTIVITY, payload: activity});
  };
};

export const GET_SORT = "GET_SORT";
export const getSort = ({isAsc, isByName}) =>{
  return async function (dispatch){
    dispatch({type: GET_SORT, payload: {isAsc, isByName}});
  };
};
