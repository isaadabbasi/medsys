module.exports = function(express, mongoose, socketio){
  var router = express.Router();

  /* GET users listing. */
  
  router.get('/', function(req, res, next) {
    res.json({
      name: "John",
      last: "Smith"
    });
  });
  
  
  
  return router;
}
