var express = require('express');
var db = require('../db/database.js');
var router = express.Router();

/*Get plan item*/
router.get('/:planId', function(req, res, next){
  var plansQuery = "SELECT * FROM `the_plan` where id = " + req.params.planId;
  db.query(plansQuery, (err, rows) => {

    if(err){
      console.log("plan get failed");
      console.log(err);
      return;
    }

    res.json({
        object: rows
    });

    console.log(req);
  });
});

module.exports = router;