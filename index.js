var http = require("https");
require('dotenv').config()

const region = 'Japan'
const date = '2020-04-07'
var options = {
	"method": "GET",
	"hostname": "covid-19-statistics.p.rapidapi.com",
	"port": null,
	"path": `/reports?date=${date}&q=${region}`,
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": process.env.X_RAPIDAPI_KEY
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();