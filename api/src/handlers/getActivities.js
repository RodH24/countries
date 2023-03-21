const { Country, Activity } = require ("../db.js");

const getActivities = async (req, res) => {
    const allActivities = await Activity.findAll({ include: Country });
    try{
        const filterA = allActivities.map((e) => e.name.toLowerCase());
        const total = filterA.filter((item, index) => {
            return filterA.indexOf(item) === index;
    });
    res.json(total);
    } catch (error) {
        res.status(404).json({ error: "Esta actividad no existe" });
    }
    
};

module.exports = getActivities;
