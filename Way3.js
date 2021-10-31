
const axios = require('axios');
// var IP = process.env.IP || '127.0.0.1';
// const getResponse = async () => {
//   try {
//     const response = await axios.get("http://ipv4bot.whatismyipaddress.com");
//     console.log('== 01 == IP ::', response.data);
//     process.env.IP =  response.data;
//   } catch (err) {
//     console.log("err");
//   }
// };
// let P = getResponse().data;
// console.log(' == 02 == ', P);

const IP = function() {
 return axios.get("http://ipv4bot.whatismyipaddress.com");
}
IP()
.then({
    console.log()
})
console.log('IP ::',IP());