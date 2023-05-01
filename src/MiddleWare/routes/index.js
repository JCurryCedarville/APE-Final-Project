var express = require('express');
var db = require('../db/database.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
var catalogList = [];

  var sql = "select * from the_catalog";
  db.query(sql, (err, rows) => {

    if(err){
      console.log("select from the_catalog failed");
      console.log(err);
      return;
    }
    //render index.pug page using array
    res.render('index', {catalogs: rows});
  });
});

module.exports = router;
