const response = require('./response');
const UserInfo = require('./User');


// response()

async function runApp(){
    console.log("Hi thanks for Using Covid-19 data tracker\n")
    const prompt = inquirer.createPromptModule();
    // const prompts = [{name: 'Name of the Region?'}, {name: 'Country ISO code? (if known)'},{ name: 'Date in which requesting data?'}, { name:'General query (This can be country, region or province)?'}];
    // let answers = await prompt(prompts)
    const user = new UserInfo();
    console.log(prompt)

}
runApp()