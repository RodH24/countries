const axios = require("axios");
const { Country, Activity } = require("../db.js");

const getCountriesName = async (req, res) =>{
    try {
        const {name} = req.query;
        let countries = [];

        if (name.length > 0){
            countries = await Country.findAll({
                where:{
                    name:{
                        $like: `%${name}`
                    }
                }
            })
        }
        return res.json(countries);
    } catch (error){
        res.status(404).json({ error: "No existe ningun pais con ese nombre" });
    }
};
module.exports = getCountriesName;