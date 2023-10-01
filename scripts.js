function TriggerMagic() {
    const answerArray = ["Probably gonna happen", "Not likely", "It's 100% sure!", "Not in a million years...", "That's written by fate", "Yes", "No"];

    const answer = document.getElementById('answer');
    const magicButton = document.getElementById('magic-button');

    const randomIndex = Math.floor(Math.random() * answerArray.length);
    const randomAnswer = answerArray[randomIndex];

    answer.textContent = randomAnswer;
    answer.style.display = 'block';
}