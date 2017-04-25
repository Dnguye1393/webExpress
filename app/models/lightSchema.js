var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lights');
var lightSchema = new mongoose.Schema({
  pin: String,
  type: String,
  info: { put: String, status: Number }
});
module.exports = mongoose.model('light', lightSchema);
