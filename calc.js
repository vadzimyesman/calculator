const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question("What would you like to calculate?", function(input){
    tokens = input.split(' ');

mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);

    if (mathSymbol === "+"){
          console.log(num1 + num2);
    }

    if (mathSymbol ==="-"){
        console.log(num1 - num2);
    }

    if (mathSymbol ==="*"){
        console.log(num1*num2);
    }
    if (mathSymbol ==="/"){
        console.log(num1/num2);
    }
    if (mathSymbol ==="Math.sqrt"){
        console.log(Math.sqrt(num1));
        console.log(Math.sqrt(num2));
    }

    reader.close()

  });