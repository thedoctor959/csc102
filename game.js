function random() {
    const userInput = (document.getElementById('userInput').value);
    const randomNumber = Math.floor(Math.random() * 10);
    const sum = userInput + randomNumber;
    const resultDiv = document.getElementById('result');

    if (sum % 2 === 0) {
        resultDiv.innerText = `Sum is ${sum}. You are a Winner!`;
        resultDiv.style.animation = 'winner 2s infinite';
    } else {
        resultDiv.innerText = `Sum is ${sum}. You Lose!`;
        resultDiv.style.animation = 'lose 2s infinite';
    }
}
