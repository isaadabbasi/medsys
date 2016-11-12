module.exports = function(express, mongoose, socketio){
  var router = express.Router();
  var admin = require('../dbmodels/admin.js');
  var doctor = require('../dbmodels/doctor.js');
  var patient = require('../dbmodels/patient.js');
  /* GET users listing. */
  
  router.get('/', function(req, res, next) {

    res.json({
      name: "John",
      last: "Smith"
    });
  });

  router.post('/users/adddoctor', (req,res, next) => {
    if(req.body && typeof req.body == 'Object'){
      console.log(req.body);
    } else {
      console.log('ROUTE HIT - EMPTY');
    }
  })
  return router;
}
