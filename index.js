const countryFile = require("./countryCodes.json");
const { request } = require("./request");
const { promptUser } = require("./Query");
// const request = async function (region, date, query)

/**
 * @function setUp Used to set up the API call
 */
async function setUp() {
  const questions = ["What country would you like to look Up?"];
  let country = await promptUser(countryFile, questions[0], "country_name");
  return country;
}

async function runApp() {
  console.log("Hi and Welcome to The COVID-19 Data tracker CLI.");
  let info = await setUp();
  console.log(info)
  let response = await request(info)
  console.log(response)
}

runApp();
