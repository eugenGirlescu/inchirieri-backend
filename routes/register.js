var express = require('express');
var router =express.Router();

router.get('/', (req,res,next) =>{
    res.send('Ana are mere')
});


module.exports= router;