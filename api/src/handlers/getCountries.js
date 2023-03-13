const axios = require("axios");
const { Country } = require("../db");

const getCountries = async (req, res) =>{

    try{
        let allCountriesApi = await axios(`https://restcountries.com/v3/all`);
        let allCountriesDB = await Country.findAll();
        allCountriesApi = allCountriesApi.data.map(country => {
            return ({
                id: country.id,
                name: country.name,
                flag: country.flag.url,
                continent: country.continents,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population
            })
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCountries;