var mongoose = require('mongoose');
var lightSchema = new mongoose.Schema({
  pin: String,
  type: String,
  info: { put: String, status: Number }
});
mongoose.model('light', lightSchema);
