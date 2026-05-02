import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const api_key = "4fc332d1e290d67d34efce24";
const url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;

https.get(url, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Enter Amount in USD : ", (amount) => {
      if (isNaN(amount)) {
        console.log(
          chalk.red("Invalid amount. Please enter a numeric value ❌")
        );
        rl.close();
        return;
      }

      rl.question(
        "Enter Target Currency (eg. INR , EUR , NPR) : ",
        (currencyType) => {
          const upperCurrency = currencyType.toUpperCase();

          if (!rates[upperCurrency]) {
            console.log(
              chalk.red("Invalid currency code ❌")
            );
            rl.close();
            return; 
          }

          const finalValue = (rates[upperCurrency] * amount).toFixed(2);

          console.log(
            chalk.green(
              `Converted Amount: ${finalValue} ${upperCurrency}`
            )
          );

          rl.close();
        }
      );
    });
  });
});