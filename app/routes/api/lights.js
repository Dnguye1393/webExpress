var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var lightSchema = require('./models/lightSchema');
var lightSchema = require('../../models/lightSchema');
/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  //retrieve all lights from Monogo
    lightSchema.find({}, function (err, lights) {
        if (err) {
            return console.error(err);
        }
        else {
            //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
            res.format({
            //JSON response will show all blobs in JSON format
                json: function(){
                    res.json(lights);
                }
            });
        }
    });
})
.post( function(req, res, next) {
    //retrieve all lights from Monogo
    var response = {};
    var newLight = new lightSchema();
    newLight.pin = req.body.pin;
    newLight.type = req.body.type;
    newLight.info = req.body.info;
    newLight.save(function(err){
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
        if(err) {
            response = {"error" : true,"message" : "Error adding data"};
        }
        else {
            response = {"error" : false,"message" : "Data added"};
        }
        res.json(response);
    });
});

router.get('/:id', function(req, res, next) {
  //retrieve all lights from Monogo
    lightSchema.findOne({'pin':req.params.id}, function (err, light) {
        if (err) {
            return console.error(err);
        }
        else {
            //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
            res.format({
                //JSON response will show all blobs in JSON format
                json: function(){
                    res.json(light);
                }
            });
        }
    });

});



router.put('/:id', function(req, res, next) {
  //retrieve all lights from Monogo
    lightSchema.findOne({'pin':req.params.id}, function (err, light) {
        if (err) {
            return console.error(err);
        }
        else {
          //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
            res.format({
                //JSON response will show all blobs in JSON format
                json: function(){
                    res.json(light);
                }
            });
        }
    });
});
module.exports = router;
