var name = "Vaibhav sabhani"

const {CalculateMultiply, addNUmber} = require("./Calculate/index.js");
const data = require("./data.json");
console.log(JSON.stringify(data));
var a = 22
var b = 33
CalculateMultiply(a, b);
addNUmber(a, b);