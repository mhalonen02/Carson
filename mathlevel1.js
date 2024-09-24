let currentProblem;
let attempts = 0;
let streak = 0;

function nextQuestion() {
    attempts = 0;
    document.getElementById('feedback').textContent = '';

    // Generate a random math problem
    const num1 = Math.floor(Math.random() * 11); // Numbers from 0 to 25
    const num2 = Math.floor(Math.random() * 11); // Numbers from 0 to 25
    const operation = Math.random() < 0.5 ? '+' : '-';
    
    // Calculate correct answer
    let correctAnswer;
    if (operation === '+') {
        correctAnswer = num1 + num2;
    } else {
        correctAnswer = num1 - num2; // Allow negative results
    }

    currentProblem = { question: `${num1} ${operation} ${num2}`, answer: correctAnswer };

    // Generate multiple-choice options
    const options = [correctAnswer];
    while (options.length < 4) {
        const randomAnswer = Math.floor(Math.random() * 11) ; // Answers between -4 and 25
        if (!options.includes(randomAnswer)) {
            options.push(randomAnswer);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Display the question
    document.getElementById('question').textContent = currentProblem.question; // Show the question

    // Clear previous options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    // Add new options
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkGuess(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('nextButton').style.display = 'none';
}

// Check the guess
function checkGuess(userGuess) {
    attempts++;
    const feedback = document.getElementById('feedback');
    const streakCount = document.getElementById('streak');

    if (parseInt(userGuess) === currentProblem.answer) {
        streak++;
        streakCount.textContent = `Streak: ${streak}`; 
        feedback.textContent = `Correct! The answer was ${currentProblem.answer}. It took you ${attempts} attempts.`;
        document.getElementById('nextButton').style.display = 'block';
    } else {
        feedback.textContent = `Wrong guess! Try again.`;
        streak = 0;
    }
}

// Start the first question
nextQuestion();
