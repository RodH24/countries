const axios = require("axios");
const { Country, Activity } = require("../db.js");

const getCountriesId = async (req, res) =>{
    try {
        const {id} = req.params;
        const country = await Country.findByPk(id, {
            include: {
                model: Activity
            }
        });
        res.json(country ? country : []);
        } catch (error) {
        res.status(404).json({ error: "Este pais no existe" });
    }
};

module.exports = getCountriesId;