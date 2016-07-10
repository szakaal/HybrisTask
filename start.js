let express = require('express');
let lg = require('./modules/logger.js');
let requestHandler = require('./modules/requestHandler.js');
let port = process.argv[3] || 3000;
let path = process.argv[2] || '/images';

let app = express();

// Setting get request handler for all requests on the /images
app.get(path, function(req, res){
  lg('Received query. Params:', req.query);
  requestHandler.handle(req, lg, (response) => {
      lg('Sending back response');
      let result = res.type('application/json').send(response).end();
  });
});
// Adding port listening function with console communicate
app.listen(port, function(){
  lg('Started listening on port ' + port);
})
