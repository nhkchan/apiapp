var express = require('express');
var router = express.Router();
var apiapp = require('../public/javascripts/main');
var aap = new apiapp();

router.get('/', function(req, res, next) {
  let test = '{"Hello": "World"}'
  let l = aap.buildRes(JSON.parse(test));
  let o={};
  o.Headers=req.headers;
  o.Body=l;
  res.send(o);
});

router.get('/stock/:ticker', function(req, res, next) {
  if (aap.checkHeader(req)) {
    aap.getResult(req.params.ticker).then(results => {
      console.log(results);
      res.send(results);
    })
    .catch(err => {
      console.log(err);
    });
  }
  else {
    res.send(aap.errorResponse())
  }
});

router.get('/stock', function(req, res, next) {
  if (aap.checkHeader(req)) {
    aap.getResult(req.params.ticker).then(results => {
      console.log(results);
      res.send(results);
    })
    .catch(err => {
      console.log(err);
    });
  }
  else {
    res.send(aap.errorResponse())
  }
});

module.exports = router;