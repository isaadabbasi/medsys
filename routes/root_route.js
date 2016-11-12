module.exports = function(express, mongoose, socketio){
  var router = express.Router();
  var admin = require('../dbmodels/admin.js');
  var doctor = require('../dbmodels/doctor.js');
//   var patient = require('../dbmodels/patient.js');
  /* GET users listing. */

  router.post('/admin_login', (req, res, next) => {
      if(req.body.username && req.body.password)   
        try{
            admin.findOne({username: req.body.username, password: req.body.password}, function(err, result){
                if(err) throw err;
                if(!err && result)
                    res.send({status: 200, message: 'Access Authorized'});
                if(!err && ! result)
                    res.send({status: 404, message: 'Access Denied'});
            })
        } catch( x ){
            console.log(x);
        }
  })
  router.post('/adddoctor', (req,res, next) => {
    console.log(req.body);
    if(req.body && (typeof req.body == 'Object' || typeof req.body == Object)){
      console.log(req.body);
    } else {
      console.log('ROUTE HIT - EMPTY');
    }
  })

  router.get('/getdocs', (req, res)=>{
    
    // try {
    //   doctor.find({"":""}, (err, results)=>{
    //     if(err) console.log(err);
        
    //     res.status(200).json(res);
    //   })
    // } catch(exception){
    //   console.log("EXCEPTION THROWN : ", exception);
    // }
  })

  return router;
}
