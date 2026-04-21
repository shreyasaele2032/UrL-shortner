const express = require('express');
const { handleshortId } = require('../controller/url');

const router = express.Router();

router.post('/', handleshortId);

module.exports = router;