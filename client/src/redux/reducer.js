import {
  GET_COUNTRIES,
  GET_BY_NAME,
  GET_PAGES,
  GET_DETAIL,
  SET_CONTINENT,
  GET_SORT,
} from "./actions";

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
  allCountries: [],
};

function paginate(currentPage, sizePage, list) {
  const inicio = sizePage * currentPage;
  const fin = inicio + sizePage;
  const paginated = list.slice(inicio, fin);
  return paginated;
}

const rootReducer = (state = initialState, action) => {
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
        allCountries: action.payload,
        numberOfPage: Math.ceil(allCountries.length/state.sizePage)
      };

    case GET_PAGES:
      const sizePage = action.payload.sizePage;
      const currentPage = action.payload.currentPage;
      const allCountriesF = state.countries;
      const pagPages = paginate(
        action.payload.currentPage,
        action.payload.sizePage,
        state.countries
      );
      return {
        ...state,
        paginated: pagPages,
        sizePage,
        currentPage,
        numberOfPage: Math.ceil(allCountriesF.length / state.sizePage),
      };

    case GET_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    case SET_CONTINENT:
      const resContinent = state.allCountries;
      let countriesContinent = [];
      if (action.payload === "") {
        countriesContinent = state.allCountries;
      } else {
        for (let i = 0; i < resContinent.length; i++) {
          if (resContinent[i].continent === action.payload)
            countriesContinent.push(resContinent[i]);
        }
      }
      return {
        ...state,
        countries: countriesContinent,
      };
    case GET_SORT:
      const countries = state.countries;
      const isAsc = action.payload.isAsc;
      const isByName = action.payload.isByName;
      const sort = isByName
        ? countries.sort((a, b) => {
            if (isAsc) {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            } else {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            }
          })
        : countries.sort((a, b) => {
            const splitA = a.population;
            const splitB = b.population;
            if(isAsc){
                if(splitA < splitB) return -1;
                if(splitA > splitB) return 1;
                return 0;
            } else{
                if(splitA > splitB) return -1;
                if(splitA < splitB) return 1; 
                return 0;
            }
          });
        const pagSortCountries = paginate(state.currentPage, state.sizePage, sort);
        return{
            ...state,
            countries: sort,
            paginated: pagSortCountries,
            numberOfPage:Math.ceil(sort.length / 10),
        };
    default:
      return { ...state };
  }
};

export default rootReducer;
