
const readline = require("readline");
// define from where u will take input and show your output
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question ("Please enter your name:", (name)=>{
    console.log("Hello", name);
    rl.close();
})
