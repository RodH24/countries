const { Router } = require("express");
const getCountries = require("../handlers/getCountries");
const getCountriesId = require("../handlers/getCountriesId");
const getCountriesName = require("../handlers/getCountriesName");
const createActivities = require("../handlers/createActivities");
const getActivities = require("../handlers/getActivities");

const usersRouter = Router();

usersRouter.get("/countries", getCountries);

usersRouter.get("/countries/:idPais", getCountriesId);

usersRouter.get("/countries/name?=", getCountriesName);

usersRouter.post("/activities", createActivities);

usersRouter.get("/activities", getActivities);

module.exports = usersRouter;