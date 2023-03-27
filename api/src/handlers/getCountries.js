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
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

module.exports = getCountries;