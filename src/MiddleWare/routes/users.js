var express = require('express');
var db = require('../db/database.js');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
var userList = [];

  var sql = "select * from the_user";
  db.query(sql, (err, rows) => {

    if(err){
      console.log("select from the_user failed");
      console.log(err);
      return;
    }
    //render index.pug page using array
    res.render('users', {users: rows});
  });
});

module.exports = router;

