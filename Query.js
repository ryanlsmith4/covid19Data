const countryFile = require("./countryCodes.json");
const inquirer = require("inquirer");
const autocomplete = require("autocompleter");

class Query {
  constructor(countryIn, isoIn, regionName, date, query) {
    this.countryIn = countryIn;
    this.isoIn = isoIn;
    this.regionName = regionName;
    this.date = date;
    this.query = query;
  }
  /**
   * @function promptUser Prompts user for custom query
   */
  async promptUser() {
    const prompt = inquirer.createPromptModule();
    let prompts = [
      { name: "region", message: "Name of the Region?" },
      { name: "iso", message: "Country ISO code? (if known)" },
      { name: "date", message: "Date in which requesting data?" },
      {
        name: "query",
        message: "General query (This can be country, region or province)?",
      },
    ];
    let answers = await prompt(prompts);
    console.log(answers);
  }
  /**
   * @function findCountry finds the country using predictive text look up
   */

  readInput() {
    process.stdin.setEncoding("utf8");
    process.stdin.on("readable", () => {
      let chunk;
      // Use a loop to make sure we read all available data.
      while ((chunk = process.stdin.read()) !== null) {
        process.stdout.write(`data: ${chunk}`);
      }
    });

    process.stdin.on("end", () => {
      process.stdout.write("end");
    });
  }

  findCountry() {
    let input = this.readInput()
    autocomplete({
      input: input,
      fetch: function (text, update) {
        let suggestions = countryFile.filter((n) =>
          n.country_name.toLocaleLowerCase().startsWith(text)
        );
        update(suggestions);
        console.log(suggestions)
      },
      onSelect: function (item) {
        n.value = item.label;
      },
    });
  }

  /**
   * @function matchCountry matches user input to the country code
   * helps reduce bad lookups
   */
  matchCountry() {
    let countryCodes = countryFile;
    for (let country in countryCodes) {
      let currCountry = countryCodes[country];
      if (
        currCountry["country_name"] == this.countryIn &&
        currCountry["alpha_3"] == this.isoIn
      ) {
        const region = [];
        region.push(this.countryIn, this.isoIn);
        return region;
      } else if (
        currCountry["country_name"] == this.countryIn ||
        currCountry["alpha_3"] == this.isoIn
      ) {
        // throw new Error('Check country and country code to be sure they belong to same country');
        return "Check country and country code to be sure they belong to same country";
      }
    }
  }
}

let query = new Query();
// console.log(user)
console.log(query.findCountry());
// module.exports = promptUser;
