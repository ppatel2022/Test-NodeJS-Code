const express = require("express");
const requestIp = require('request-ip');
let app = express();

app.get("/", function (request, response) {
  var clientIp = requestIp.getClientIp(request);
  console.log(clientIp);
});

app.listen(3000, () => console.log(`App listening on port 3000`));


// This is not PERFECT, Gives "::1" as an output...

