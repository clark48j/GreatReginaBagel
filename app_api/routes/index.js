const express = require('express');
const router = express.Router();
const ctrlBagels = require('../controllers/bagels');


//bagels
router
    .route('/bagels')
    .get(ctrlBagels.allBagels)


module.exports = router;