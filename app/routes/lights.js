var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //retrieve all lights from Monogo
        mongoose.model('lights').find({}, function (err, lights) {
              if (err) {
                  return console.error(err);
              } else {
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.format({
                      //HTML response will render the index.jade file in the views/blobs folder. We are also setting "blobs" to be an accessible variable in our jade view
                    html: function(){
                        res.render('lights/index', {
                              title: 'Lights',
                              "lights" : lights
                          });
                    },
                    //JSON response will show all blobs in JSON format
                    json: function(){
                        res.json(infophotos);
                    }
                });
              }
        });
});

router.get('/:id', function(req, res, next) {
  res.render('rest', { title: 'REST' });
});



module.exports = router;
