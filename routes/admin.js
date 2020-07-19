const path = require('path'); // import path module
const express = require('express');

const rootDir = require('../util/path'); // constructing path to root directory

const router = express.Router(); // calling express router

router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir, 'views','add-product.html'))
  });
  
  router.post('/add-product', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
  });
  

module.exports = router;