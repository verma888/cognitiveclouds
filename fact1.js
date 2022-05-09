let num = process.argv[2];  //user input from process 
console.log(num);

function factofNum(num){
    if(num<0){
        console.log('Please provide a positive number');
        

    } else if(num==0){
        console.log(`Factorial of ${num} is 1`);
        
    }else{
        let fact = 1;
        for(let i=num; i>0; i--){
        fact= fact*i;
        }
        console.log(`Factorial of ${num} is : ${fact}`);
    
}
}
factofNum(num);