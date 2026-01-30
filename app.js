 const {add , multi , subs , divi}= require("./Calculate/calculation.js")
var name = "Vaibhav sabhani"

const {CalculateMultiply, addNUmber} = require("./Calculate/index.js");
const data = require("./data.json");
console.log(JSON.stringify(data));
var a = 22
var b = 33
CalculateMultiply(a, b);
addNUmber(a, b);


console.log(add(5,10));
console.log(subs(5,10));
console.log(multi(5,10));
console.log(divi(5,10));
