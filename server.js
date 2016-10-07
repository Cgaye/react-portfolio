var http = require('http');
var path = require('path');



var express = require('express');

//

//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);


router.use(express.static(path.resolve(__dirname, 'build')));
router.use(express.static(path.join(__dirname, 'public')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
