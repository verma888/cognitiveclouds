let input= process.argv[2];

function isPalindrom(input){

    let splitInput = input.split('');
    let reverseInput = splitInput.reverse();
    console.log(reverseInput);
    let result = reverseInput.join('');

    if(result==input){
        console.log('The given input is a Palindrom');
    } else {
        console.log('The given input is not a Palindrom');
    }
}

isPalindrom(input);