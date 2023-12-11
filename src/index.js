const core = require("@actions/core");
//const person = process.env.INPUT_PERSON;
const person = core.getInput("person");
console.log(`Hello ${person}`);
