const express = require('express'); //import express
const router  = express.Router(); 
const kpiController = require('../controllers/kpisControllers'); 

router.get('/kpi1', kpiController.findKpi1);
router.get('/kpi2', kpiController.findKpi2); 


module.exports = router; // export to use in server.js
