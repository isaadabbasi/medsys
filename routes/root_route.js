module.exports = function(express, mongoose, socketio){
  var router = express.Router();
  var admin = require('../dbmodels/admin.js');
  var doctor = require('../dbmodels/doctor.js');
  var patient = require('../dbmodels/patient.js');
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
    
    doctor.find({}, (err, docs)=>{
      if(err) console.log(err);
      else if(!err && docs.length>0)
        res.status(200).json(docs);
      else
        res.json({message: 'No Doctors Found'})
    })
    

    router.post('add_new_patient', (request, response, next)=>{
      console.log("[ROUTER_HIT /add_new_patient]");
      console.log(typeof req.body);
      
      var newPatient = new patient({
          uid: req.body.uid,
          name: req.body,
          disease: req.body.disease, 
          status: req.body.status,
          is_admin: req.body.is_admin,
          condition: req.body.condition,
          admit_date: req.body.admit_date,
          discharge_date: req.body.discharge_date
      })
      try{ 
        newPatient.save((err)=>{
          if(err) throw err;
          if(!err)
            res.send({status: 200, message: 'New Patient Successfully Added'});
        })
      } catch(ex){
        console.log("CAUGHT EXCEPTION: ", ex);
      }
      
    })
})

  return router;
}
