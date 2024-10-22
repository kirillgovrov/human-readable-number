module.exports = function toReadable (number) {
    const firstNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
    'eighteen', 'nineteen'];

    const secNum = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const hundred = 'hundred';

    if (number===0){
        return 'zero';
    }

    if (number===1000){
        return 'one thousand';
    }

    let result = '';


    if (Math.floor(number/100) > 0){
        result += firstNum[Math.floor(number/100)] + ' ' + hundred;
        number %= 100;
        if (number > 0){
            result += ' ';
        }
    }

    if (number >= 20){
    result += secNum[Math.floor(number/10)];
    number %= 10;
        if (number > 0) {
            result += ' ' + firstNum[number];
        }
    } else if (number > 0){
        result += firstNum[number];
    }
    return result.trim();
}
