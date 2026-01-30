import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todoList = [];
const runTodoApp = () => {
  console.log("Press the todo List");
  console.log("1. Add the Todo");
  console.log("2. View the TodoList");
  console.log("3. Exit");
  const handleInput = (option) => {
    if (option === "1") {
      rl.question("please write the TODO :", (todo) => {
        todoList.push(todo);
        console.log("todo added successfully");
        runTodoApp();
      });
    } else if (option === "2") {
      todoList.map((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
      });
      runTodoApp();
    } else if (option === "3") {
      console.log("Exiting the TODO App. Goodbye!");
      rl.close();
    } else {
      console.log("Invalid Option Please try again");
      runTodoApp();
    }
  };
  rl.question(
    "Please write the number for following the process : ",
    handleInput,
  );
};

runTodoApp();
