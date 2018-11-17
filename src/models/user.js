var mongoose = require('mongoose');  
var EmpSchema = new mongoose.Schema({  
  name: String,
  email: String,
  salary:String
});


const Emp= mongoose.model('dav', EmpSchema);

module.exports = Emp