const { Country, Activity } = require("../db.js");

const createActivities = async (req, res) =>{
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        let activity = await Activity.create({ name, difficulty, duration, season })
        await activity.setCountries(countries)

        let activityCountry = await Activity.findOne({
            where: { name: name },
            attributes: { exclude: ['updateAt', 'createAt'],},
            include: {
                model: Country,
                through: {attributes: []}
            }
        })
        // console.log(activityCountry);
        res.json(activityCountry)
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = createActivities;