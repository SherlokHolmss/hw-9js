function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}


logItems(['Mango', 'Poly', 'Ajax']);


function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}


console.log(calculateEngravingPrice('Hello world', 10));

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}


console.log(checkForSpam('Get best SALE offers now!')); 
console.log(checkForSpam('Latest technology news')); 

function sumInputNumbers() {
    const numbers = [];
    let input;

    while (true) {
        input = prompt('Введіть число (або натисніть Cancel для завершення):');

        if (input === null) {
            break;
        }

        const number = Number(input);
        if (!isNaN(number)) {
            numbers.push(number);
        }
    }

    if (numbers.length > 0) {
        let total = 0;
        for (const num of numbers) {
            total += num;
        }
        console.log(`Загальна сума чисел дорівнює ${total}`);
    } else {
        console.log('Жодного числа не було введено.');
    }
}

sumInputNumbers();
