var https = require("https");
const axios = require('axios');
require('dotenv').config()

async function getCallData(){
	const region = 'Japan';
	const date = '2020-04-07';
	let headers = {
		"content-type": "application/octet-stream",
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": process.env.X_RAPIDAPI_KEY
	};
	let params = {
	"region_province": "Beijing",
    "iso": "CHN",
    "region_name": "China",
    "date": "2020-03-14",
    "q": "China Beijing"
	}

	let instance = axios.create({
		// "method":"GET",
		httpsAgent: new https.Agent({
			rejectUnauthorized: false
		}),
		headers,
		});

		try {
			let response =  await instance.get('https://covid-19-statistics.p.rapidapi.com/reports', {
				params
			});

			console.log(response)
		} catch (e) {
			console.log('err: ', e)
		}
}
getCallData()
