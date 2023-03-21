const axios = require("axios");
const { Country, Activity } = require ("../db.js");

const getCountriesName = async (req, res) =>{
    try {
        const allCountries = await Country.findAll({
            include: Activity
        });
        const byName = await allCountries.filter(i => i.name.toLowerCase().startsWith(name.toLowerCase()))
        byName.length ? res.json(byName) : res.status(404).send({ 'msg': 'Not found' });
    } catch (error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = getCountriesName;