const { Router } = require('express');
const usersRouter = require("./usersRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/pi', usersRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
