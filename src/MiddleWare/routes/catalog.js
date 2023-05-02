var express = require('express');
var db = require('../db/database.js');
var router = express.Router();

/*Edit catalog item*/
router.get('/', function(req, res, next){
  var catalogQuery = "select * from the_user";
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