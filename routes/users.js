var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userId',(req,res,next) => {
  const id = req.params.userId;
  if(id === 'shoes'){
    res.send("we have shoes")
  }else{
    res.send(`we don't have shoes`)
  }
})
module.exports = router;
