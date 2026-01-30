const crypto = require("node:crypto")

console.log("key is generating")
//sync funtion
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("key genrated")

//async funtion
crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log(key,"key is generated")
})