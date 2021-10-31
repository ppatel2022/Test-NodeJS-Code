// Available FREE API for getting IP address of router you are getting network.
const request = require("request");
let options = {
  'method': 'GET',
  'url': 'http://ipv4bot.whatismyipaddress.com',
  'headers': {
  },
};

request(options, function (err, res) {
  if (err) throw new Error(err);
  console.log(res.body);
});


//=========================


request('http://ipv4bot.whatismyipaddress.com', function (err, res) {
  if (err) throw new Error(err);
  console.log(res.body);
});