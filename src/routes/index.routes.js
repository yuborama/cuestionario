const express = require("express");
const router = express.Router();

const { rederIndex, rederAbout,rederSingin,renderPrueba} = require('../controllers/index.controller');
const {nuevapregunta,revolverNP,guardar}=require('../controllers/preguntas.controller')

router.get('/', rederIndex);

router.get('/random',revolverNP);

//router.get('/prueba2',revolverR);

router.get('/prueba',nuevapregunta);



router.post('/prueba',guardar)



router.get('/singin',rederSingin);

router.post('/index',renderPrueba);
//router.post('/singin',Singin);

module.exports=router;