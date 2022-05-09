let num = process.argv[2];

function factorial(num){

    if(num ==0){
        return 1;
    }else if(num<0){
        return "Please enter valid input!";
    } else {
        if(num>0){
            return num * factorial(num-1);
        }
    }
}

console.log(`Factorial of ${num} is : `+ factorial(num));