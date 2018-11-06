var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.post('/sendName', function(req, res, next) {
	console.log(req.body);
  MongoClient.connect('mongodb://localhost:27017/recruits', {useNewUrlParser: true}, function (err, db) {
  if (err) throw err;
  var dbo = db.db("recruits");
  var myobj = {"namee": req.body.namee, "contact": req.body.contact };
  dbo.collection("recruit").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

})
  res.render("success");
});

module.exports = router;
