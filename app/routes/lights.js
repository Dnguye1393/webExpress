var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var lightSchema = require('./models/lightSchema');
var lightSchema = require('../models/lightSchema');
/* GET home page. */
router.get('/', function(req, res, next) {
  //retrieve all lights from Monogo
    lightSchema.find({}, function (err, lights) {
          if (err) {
              return console.error(err);
          } else {
              //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
              res.format({
                //JSON response will show all blobs in JSON format
                json: function(){
                    res.json(lights);
                }
            });
          }
    });
});
module.exports = router;
