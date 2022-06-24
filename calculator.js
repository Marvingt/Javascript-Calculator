const operator = prompt("Enter choice: +, -, *, /");
let num1 = prompt("Enter First number: ");
let num2 = prompt("Enter Second number: ");

let result;

num1 = parseInt(num1);
num2 = parseInt(num2);

if (operator=="+"){
    result = num1 + num2;
     alert(result)
    
    }

    else if (operator=="-"){
        result = num1 - num2;
       alert(result) 
        
    }


    else if (operator=="*"){
        result = num1 * num2;
        alert(result)
    }

    else {
        result = num1 / num2;
        alert(result)
    }
