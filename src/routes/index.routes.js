const express = require("express");
const router = express.Router();

const { rederIndex, rederAbout,rederSingin,renderPrueba} = require('../controllers/index.controller');


router.get('/', rederIndex);


router.get('/about',rederAbout);


router.get('/singin',rederSingin);

router.post('/index',renderPrueba);
//router.post('/singin',Singin);

module.exports=router;