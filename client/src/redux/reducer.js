import { GET_COUNTRIES, GET_BY_NAME, GET_PAGES, GET_DETAIL, SET_CONTINENT } from "./actions";

const initialState = {
    countries: [],
    allContinents: [],
    population: [],
    allActivities: [],
    activity: [],
    details: [],
    filter: [],
    fromApi: true,
    paginated: [],
    sizePage: 10,
    currentPage: 0,
    numberOfPage: 0,
    allCountries: []
}

function paginate(currentPage, sizePage, list) {
    const inicio =sizePage *currentPage;
    const fin = inicio +sizePage;
    const paginated = list.slice(inicio, fin);
    return paginated;
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_COUNTRIES:
            const allCountries = action.payload;
            const pagAllCountries = paginate(
                state.currentPage,
                state.sizePage,
                allCountries
            );
            return {
                ...state,
                countries: action.payload,
                allContinents: action.payload,
                ppopulation: action.payload,
                allActivities: action.payload,
                paginated: pagAllCountries,
                searchName: action.payload,
                allCountries: action.payload
            }

        case GET_PAGES:
                const sizePage = action.payload.sizePage;
                const currentPage = action.payload.currentPage;
                const allCountriesF = state.filter;
                console.log("hola2");
                const pagPages = paginate(
                  action.payload.currentPage,
                  action.payload.sizePage,
                  state.filter
                );
                return {
                  ...state,
                  paginated: pagPages,
                  sizePage,
                  currentPage,
                  numberOfPage: Math.ceil(allCountriesF.length / 10),
                };

        case GET_BY_NAME:
            return{
                ...state,
                countries:action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                details: action.payload
            }
        case SET_CONTINENT:
            const resContinent = state.allCountries
            let countriesContinent = [];
            if (action.payload === ""){
                countriesContinent = state.allCountries;
            }
            else{
            for (let i=0; i<resContinent.length; i++){
                if(resContinent[i].continent === action.payload)
                countriesContinent.push(resContinent[i]);
            }}
            return {
                 ...state,
                 countries: countriesContinent
            }
        default:
            return {...state};
    }
}

export default rootReducer;