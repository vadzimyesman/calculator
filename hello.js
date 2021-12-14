const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Hello, what is your name?", function(answer){
    console.log ("Nice to meet you"+ answer);
    console.log ('Nice to meet you ${answer}');
});

reader.question("What is your age?", function(number){
    let newAge = number + 3;
    console.log ('you will be ${newAge} in 3 years');
    

