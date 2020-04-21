const { AutoComplete } = require("enquirer");
/**
 * @function promptUser Prompts user for custom query
 */
async function promptUser(obj, message, field = "country_name") {
  const prompt = new AutoComplete({
    name: "prompt",
    message: message,
    limit: 10,
    initial: 2,
    choices: obj.map((item) => {
      return item[field];
    }),
  });

  try {
    let countryName = await prompt.run();
    let index = obj.findIndex((item) => item["country_name"] === countryName);
    let country = obj[index];
    let res = [country["country_name"], country["alpha_3"]];
    return res;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { promptUser };
