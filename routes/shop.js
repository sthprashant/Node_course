const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); // constructing path to root directory

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html')); //choosing a path
  });

  module.exports = router
  