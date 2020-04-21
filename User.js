const countryFile = require('./countryCodes.json')
const inquirer = require('inquirer');


class Query {
    constructor(countryIn, isoIn, regionName, date, query ){
        this.countryIn = countryIn;
        this.isoIn = isoIn;
        this.regionName = regionName;
        this.date = date;
        this.query = query;
    }
    /**
     * @function promptUser Prompts user for custom query
     */
    async promptUser () {
        const prompt = inquirer.createPromptModule();
        let prompts = [{name: 'Name of the Region?'}, {name: 'Country ISO code? (if known)'},{ name: 'Date in which requesting data?'}, { name:'General query (This can be country, region or province)?'}]
        let answers = await prompt(prompts)
      console.log(answers)
    }

    /** 
    * @function matchCountry matches user input to the country code
    * helps reduce bad lookups
   */
  matchCountry () {
        let countryCodes = countryFile;
        for (let country in countryCodes) {
            let currCountry = countryCodes[country];
            if (currCountry['country_name'] == this.countryIn && currCountry['alpha_3'] == this.isoIn) {
                const region = [];
                region.push(this.countryIn, this.isoIn)
                return region
            } else if (currCountry['country_name'] == this.countryIn || currCountry['alpha_3'] == this.isoIn) {
                // throw new Error('Check country and country code to be sure they belong to same country');
                return 'Check country and country code to be sure they belong to same country'
            }
        }
  }
}

let query = new Query();
// console.log(user)
console.log(query.promptUser())
// module.exports = promptUser;