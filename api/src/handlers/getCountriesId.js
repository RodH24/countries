const axios = require("axios");
const { Country, Activity } = require("../db.js");

const getCountriesId = async (req, res, next) =>{
    try {
        const {id} = req.params;
        let countries

        if (id.length > 0) {
            countries = await Country.findByPk(id, { include: Activity })

            countries = {
                id: countries.id,
                name: countries.name,
                flag: countries.flag,
                continent: countries.continent,
                capital: countries.capital,
                subregion: countries.subregion,
                area: countries.area,
                population: countries.population,
                activities: countries.Activities.map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                        difficulty: e.difficulty,
                        duration: e.duration,
                        season: e.season
                    }
                })
            }
        }
        res.json(countries)
        } catch (error) {
        res.status(404).json({ error: "Este pais no existe" });
    }
};

module.exports = getCountriesId;