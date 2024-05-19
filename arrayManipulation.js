function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // square even numbers
        } else {
            return number * 3; // triple odd numbers
        }
    });
}

function formatArrayStrings(strings, processedNumbers) {
    if (strings.length !== processedNumbers.length) {
        throw new Error("Both arrays must have the same length");
    }

    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase(); // capitalize if number is even
        } else {
            return str.toLowerCase(); // lowercase if number is odd
        }
    });
}
