const fs = require("fs");

const https = require("https");

console.log("hello world");

var a = 10002;
var b = 10005;

fs.readFileSync("./Readme.txt","utf-8")
console.log("this will execute after read")

https.get("https://dummyjson.com/products/1" , (res)=>{
    console.log("fetched data successfully");
})

setTimeout(() => {
      console.log("setTimeOut called after 5 seconds");
}, 5000);



fs.readFile("./Readme.txt","utf-8",(err ,data)=>{
    console.log("File data :", data);
})

function multiply(c,d){
    const result = c * d;
    return result
}

const c = multiply(a,b);

console.log(c,"<<<multiplication data");