

const https = require('https')

var client_id = '754792fb513a4758af5ea3b0729020b0';
var client_secret = '551fe853ff204494ad79e3bc613e79dd';



var redirect_uri = 'http://localhost:8888/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});


// const reqBody = JSON.stringify({
//   grant_type: 'client_credentials'
// })

// const authOptions = {
//   hostname: 'accounts.spotify.com',
//   port: 443,
//   path: '/api/token',
//   method: 'POST',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
//     'Content-Type': 'application/json',
//     'Content-Length': reqBody.length
//   }
// }

// const req = https.request(authOptions, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.write(reqBody);
// req.end();


// let getAccessToken = () => {
//   let options = {
//     url: 'https://accounts.spotify.com/api/token',
//     method: 'POST',
//     headers: {
//       // 'Content-Type':'application/x-www-form-urlencoded',
//       'Authorization': `Basic <base64 encoded client_id:client_secret>`
//     },
//     params: {
//       grant_type: 'client_credentials'
//     }
//   }
//   axios(options)
//   .then((resp) => {
//     console.log('resp', resp.data)
//   })
//   .catch((err) => {
//     console.log('ERR GETTING SPOTIFY ACCESS TOKEN', err);
//   })
// }