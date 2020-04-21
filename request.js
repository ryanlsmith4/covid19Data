var https = require("https");
const axios = require("axios");
require("dotenv").config();

async function request(region, date = '2020-04-20', query) {
  let headers = {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
  };
  let params = {
	// region_province: region[0],
	region: region[0],
    iso: region[1],
    date: date,
    q: query,
  };

  let instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers,
  });

  try {
    let response = await instance.get(
      "https://covid-19-statistics.p.rapidapi.com/reports",
      {
        params,
      }
    );
	return response;
  } catch (e) {
    console.log("err: ", e);
  };
};

module.exports = { request };
