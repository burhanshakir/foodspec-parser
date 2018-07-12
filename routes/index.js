var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Displaying the first page
router.get('/', (req, res, next) => {
    res.sendFile('index.html');
});


module.exports = router;

