module.exports = function(express, mongoose, socketio){
  var router = express.Router();

  /* GET users listing. */
  
  router.get('/', function(req, res, next) {
    res.json({
      name: "John",
      last: "Smith"
    });
  });

  router.get('/bb', function(req, res, next){
    console.log('/users');
    res.json({
      username: 'saadabbasi',
      id: 11
    })
  });
  
  
  
  return router;
}
