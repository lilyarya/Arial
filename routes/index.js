// entry point to all routes
const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
//console.log('Loaded');  // to check

router.get('/',homeController.home);
router.use('/users',require('./users'));

module.exports = router;