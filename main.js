document.getElementById('generate').addEventListener('click', () => {
    const numbersDiv = document.getElementById('numbers');
    numbersDiv.innerHTML = '';
    const numbers = new Set();
    while(numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.className = 'number';
            span.textContent = number;
            numbersDiv.appendChild(span);
        }, index * 200); // 200ms delay between each number
    });
});