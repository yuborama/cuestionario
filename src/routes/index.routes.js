const express = require("express");
const router = express.Router();

const {  rederAbout,rederSingin,renderPrueba} = require('../controllers/index.controller');
const {revolverNP,guardar,llenarbase,rederIndex}=require('../controllers/preguntas.controller')

router.get('/', rederIndex);

router.get('/random',revolverNP);

//router.get('/prueba2',revolverR);

router.get('/llenar',llenarbase)


router.post('/prueba',guardar)

router.get('/singin',rederSingin);

router.post('/index',revolverNP);
//router.post('/singin',Singin);

module.exports=router;