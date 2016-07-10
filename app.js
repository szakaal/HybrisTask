var express = require('express');
var port = process.argv[3] || 3000;
var path = process.argv[2] || '/images';
var app = express();
app.get(path, function(req, res){
  console.log(req.query);
  res.send('testujemy expresa');
});
app.listen(port, function(){
  console.log('Started listening on port ' + port);
})
