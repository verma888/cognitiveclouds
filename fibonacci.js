let input = parseInt(process.argv[2]);

function getFibo(input){
    if(input<2){
        return input;
    } else {
        return  getFibo(input -1) + getFibo(input -2);
    }
}
if(input<=0){
    console.log('Please provide a positive integer');
} else {
    for(let i = 0; i< input; i++){
        console.log(getFibo(i));
    }
}
