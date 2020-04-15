const countryFile = require('./countryCodes.json')

class promptUser {
    constructor(regionProv, iso, regionName, date, query ){
        this.regionProv = regionProv;
        this.iso =  iso;
        this.regionName = regionName;
        this.date = date;
        this.query = query;
    }
    /** 
    * @function matchCountry matches user input to the country code
    * helps reduce bad lookups
    * @param country The country in which to attempt to match ISO code
    * @param iso 3 digit ISO country code
   */
  matchCountry (countryIn, isoIn) {
    if (countryIn || isoIn){
        let countryCodes = countryFile;
        for (let country in countryCodes){
            let currCountry = countryCodes[country];
            if (currCountry['country_name'] == countryIn && currCountry['alpha_3'] == isoIn) {
                const region = [];
                return region.push(countryIn, isoIn)
            } else if (currCountry['country_name'] == countryIn || currCountry['alpha_3'] == isoIn) {
                throw new Error('Check country and country code to be sure they belong to same country');
            }
        }
    } else {
        return false
    }
}
    // getRegionInfo(regionName, regionProv){
    //     regionInfo = [];
    //     regionInfo.push(regionName, regionProv)
    //     return regionInfo;
    // }
    // getIso(iso){
    //     this.iso = iso;
    //     return this.iso;
    // }
    // getDate(date){
    //     this.date = date;
    //     return this.date
    // }
    // getQuery(query){
    //     this.query = query;
    //     return this.query;
    // }
}

let user = new promptUser('Uganda', 'UGA');
// console.log(user)
console.log(user.matchCountry('Uganda', 'UGA'))
// module.exports = promptUser;