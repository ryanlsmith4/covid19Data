var https = require("https");
const axios = require('axios');
require('dotenv').config()

module.exports = async function(regionProv, iso, regionName, date, query){
	let headers = {
		"content-type": "application/octet-stream",
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": process.env.X_RAPIDAPI_KEY
	};
	let params = {
	"region_province": regionProv,
    "iso": iso,
    "region_name": regionName,
    "date": date,
    "q": query
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

