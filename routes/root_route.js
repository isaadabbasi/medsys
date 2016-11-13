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
  router.post('/add_doctor', (req,res, next) => {
    console.log(typeof req.body, req.body.length || req.body.size);
    if(req.body && (typeof req.body == 'object')){
      var newDoctor = new doctor({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        is_admin: false,
        specialization: req.body.specialization,
        join_date: new Date()
      })

      try{
        newDoctor.save( (err)=> {
          if(err) throw err;
          
          if(!err)
            res.send({status:200, message: 'Doctor Successfully Created'});
        })
      } catch(exc) { res.send({ status: 500, message: 'Unable to Create Doctor' }) }
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

    router.delete('/delete_doc/:id', function(req, res){
      console.log(req.params.id);
    })
})

  return router;
}
