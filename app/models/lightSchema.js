var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lights');
// var lightSchema = function(data){
//   this.pin = data.pin;
//   this.type = data.type;
//   this.info = data.info;
// }
var lightSchema = new mongoose.Schema({
  pin: String,
  type: String,
  info: { put: String, status: Number }
});
/**
 * Find Lights by pin
 * @static
 */
lightSchema.static.findPinById = function (id, callback) {
	this.findOne({pin: id}, callback);
};


module.exports =  mongoose.model('light', lightSchema);
