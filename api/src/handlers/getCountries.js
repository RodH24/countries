const axios = require("axios");
const { Country, Activity } = require("../db");

const getCountries = async (req, res) =>{
    try {
      const { name } = req.query;
      const allCountries = await Country.findAll({
        include: Activity,
      });

      if (name) {
        const byName = await allCountries.filter((i) =>
          i.name.toLowerCase().startsWith(name.toLowerCase())
        );
        byName.length
          ? res.json(byName)
          : res.status(404).send({ msg: "Not found" });
      } else {
        res.json(allCountries);
      }
      //     const allCountries = Country.findAll();
      //     if(!allCountries.length){
      //     let allCountriesApi = await axios.get(`https://restcountries.com/v3/all`);
      //     allCountriesApi = allCountriesApi.data.map(country => {
      //         return ({
      //             id: country.cca3,
      //             name: country.name.common,
      //             flag: country.flag[0],
      //             continent: country.continents[0],
      //             capital: country.capital ? country.capital[0] : 'Not found',
      //             subregion: country.subregion,
      //             area: country.area,
      //             population: country.population
      //         })
      //     })
      // }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

module.exports = getCountries;