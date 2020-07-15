const express = require('express');
const app = express();
const { lookup } = require('geoip-lite');
const router = express.Router();

router.get('/someroute', (req,res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip); // ip address of the user
  console.log(lookup(ip)); // location of the user
  return res.json({
    'responseCode' : 0,
    'responseDesc' : 'success'
  });
});

app.use('/', router);
app.listen(5000);