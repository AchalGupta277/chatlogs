const express = require('express');
const router = express.Router();
const chatlogs = require('./chatlogs');

/* Application Routes */
router.use('/api/chatlogs', chatlogs);

module.exports = router;
