const express = require('express');
const router = express.Router();
const MainControler =require('../controler/Main_Controler');
// const UserControler = require('../controler/User_Controler');
// const isAuthenticated = require('../middleware/isAuth_middleware');


 







// Health Route for ECR and ECS
router.get('/healthcheck' , MainControler.healthchecker);


router.get('/detail' , MainControler.main)



 



 module.exports = router; 



 