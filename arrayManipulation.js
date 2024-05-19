function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // square even numbers
        } else {
            return number * 3; // triple odd numbers
        }
    });
}