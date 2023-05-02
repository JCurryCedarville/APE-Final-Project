var express = require('express');
var db = require('../db/database.js');
var router = express.Router();

/*Edit catalog item*/
router.get('/', function(req, res, next){
  var catalogQuery = "select U.name, U.password, U.type, P.id as planId from the_user as U inner join the_plan as P where P.is_default = 1 and U.name = P.user";
  db.query(catalogQuery, (err, rows) => {

    if(err){
      console.log("select from the_catalog failed");
      console.log(err);
      return;
    }
    //render index.pug page using array
    res.json({
        object: rows
    });
  });
});

// /*Delete catalog item*/
// router.post('delete/:year', function(req, res, next){
//     console.log(req.params.year);
//     res.render('catalog');
// });

module.exports = router;