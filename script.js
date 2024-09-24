// const animals = [
//     { name: 'Uncle Aaron', image: 'images/aaronhalonen.jpeg' },
//     { name: 'Bison', image: 'images/bison.jpeg' },
//     { name: 'Black Bear', image: 'images/blackbear.jpeg' },
//     { name: 'Black Panther', image: 'images/blackpanther.jpeg' },
//     { name: 'Brown Bear', image: 'images/brownbear.jpeg' },
//     { name: 'Caribou', image: 'images/caribou.jpeg' },
//     { name: 'Cheetah', image: 'images/cheetah.jpeg' },
//     { name: 'Uncle Craig', image: 'images/craighalonen.jpeg' },
//     { name: 'Duluth', image: 'images/duluth.webp' },
//     { name: 'Elk', image: 'images/elk.jpeg' },
//     { name: 'Florida', image: 'images/florida.jpeg' },
//     { name: 'Fox', image: 'images/fox.jpeg' },
//     { name: 'Grandma/Grandpas House', image: 'images/grandma&grandpas.jpeg' },
//     { name: 'Grizzly Bear', image: 'images/grizzly.jpeg' },
//     { name: 'Hermits Cove Camp', image: 'images/hermitscove.jpeg' },
//     { name: 'Hermits Cove Beach', image: 'images/hermitscove.JPG' },
//     { name: 'Hunting Trip', image: 'images/hunting.jpeg' },
//     { name: 'Jaguar', image: 'images/jaguar.jpeg' },
//     { name: 'Leopard', image: 'images/leopard.jpeg' },
//     { name: 'Lucas Raymond', image: 'images/lucasraymond.webp' },
//     { name: 'Meerkat', image: 'images/meerkat.jpeg' },
//     { name: 'Mom & Mara', image: 'images/mom&mara.jpeg' },
//     { name: 'Mountain Lion', image: 'images/mountainlion.jpeg' },
//     { name: 'Mule Deer', image: 'images/muledeer.jpeg' },
//     { name: 'Patrick Kane', image: 'images/patrickkane.jpeg' },
//     { name: 'Peppermint Twist', image: 'images/ptwist.jpeg' },
//     { name: 'Puma', image: 'images/puma.jpeg' },
//     { name: 'Takin', image: 'images/takin.jpeg' },
//     { name: 'Uncle Brett', image: 'images/unclebrett.JPG' },
//     { name: 'Whitetail Deer', image: 'images/whitetail.jpeg' },
//     { name: 'Me at the Zoo!', image: 'images/zoo.png' },
// ];

// let currentAnimal;
// let attempts = 0;

// function nextQuestion() {
//     attempts = 0;
//     document.getElementById('feedback').textContent = '';

//     // Select a random animal
//     currentAnimal = animals[Math.floor(Math.random() * animals.length)];
//     document.getElementById('hintImage').src = currentAnimal.image;
//     document.getElementById('hintImage').style.display = 'block';

//     // Generate multiple-choice options
//     const options = [currentAnimal.name];
//     while (options.length < 4) {
//         const randomAnimal = animals[Math.floor(Math.random() * animals.length)].name;
//         if (!options.includes(randomAnimal)) {
//             options.push(randomAnimal);
//         }
//     }
//     // Shuffle options
//     options.sort(() => Math.random() - 0.5);

//     const optionsContainer = document.getElementById('options');
//     optionsContainer.innerHTML = ''; // Clear previous options
//     options.forEach(option => {
//         const button = document.createElement('button');
//         button.textContent = option;
//         button.onclick = () => checkGuess(option);
//         optionsContainer.appendChild(button);
//     });

//     document.getElementById('nextButton').style.display = 'none';
// }

// // Check the guess
// function checkGuess(userGuess) {
//     attempts++;
//     const feedback = document.getElementById('feedback');
//     const streakCount = document.getElementById('streak');

//     if (userGuess === currentAnimal.name) {
//         streak++;
//         streakCount.textContent = `Streak: ${streak}`; 
//         feedback.textContent = `Correct! The animal was a ${currentAnimal.name}. It took you ${attempts} attempts.`;
//         document.getElementById('nextButton').style.display = 'block';
//     } else {
//         feedback.textContent = `Wrong guess! Try again.`;
//         streak = 0;
//     }
// }

// // Start the game
// nextQuestion();
// let streak = 0;

const animals = [
    { name: 'Uncle Aaron', image: 'images/aaronhalonen.jpeg' },
    { name: 'Bison', image: 'images/bison.jpeg' },
    { name: 'Black Bear', image: 'images/blackbear.jpeg' },
    { name: 'Black Panther', image: 'images/blackpanther.jpeg' },
    { name: 'Brown Bear', image: 'images/brownbear.jpeg' },
    { name: 'Caribou', image: 'images/caribou.jpeg' },
    { name: 'Cheetah', image: 'images/cheetah.jpeg' },
    { name: 'Uncle Craig', image: 'images/craighalonen.jpeg' },
    { name: 'Duluth', image: 'images/duluth.webp' },
    { name: 'Elk', image: 'images/elk.jpeg' },
    { name: 'Florida', image: 'images/florida.jpeg' },
    { name: 'Fox', image: 'images/fox.jpeg' },
    { name: 'Grandma/Grandpas House', image: 'images/grandma&grandpas.jpeg' },
    { name: 'Grizzly Bear', image: 'images/grizzly.jpeg' },
    { name: 'Hermits Cove Camp', image: 'images/hermitscove.jpeg' },
    { name: 'Hermits Cove Beach', image: 'images/hermitscove.JPG' },
    { name: 'Hunting Trip', image: 'images/hunting.jpeg' },
    { name: 'Jaguar', image: 'images/jaguar.jpeg' },
    { name: 'Leopard', image: 'images/leopard.jpeg' },
    { name: 'Lucas Raymond', image: 'images/lucasraymond.webp' },
    { name: 'Meerkat', image: 'images/meerkat.jpeg' },
    { name: 'Mom & Mara', image: 'images/mom&mara.jpeg' },
    { name: 'Mountain Lion', image: 'images/mountainlion.jpeg' },
    { name: 'Mule Deer', image: 'images/muledeer.jpeg' },
    { name: 'Patrick Kane', image: 'images/patrickkane.jpeg' },
    { name: 'Peppermint Twist', image: 'images/ptwist.jpeg' },
    { name: 'Puma', image: 'images/puma.jpeg' },
    { name: 'Takin', image: 'images/takin.jpeg' },
    { name: 'Uncle Brett', image: 'images/unclebrett.JPG' },
    { name: 'Whitetail Deer', image: 'images/whitetail.jpeg' },
    { name: 'Me at the Zoo!', image: 'images/zoo.png' },
];

let currentAnimal;
let attempts = 0;
let streak = 0;

function nextQuestion() {
    attempts = 0;
    document.getElementById('feedback').textContent = '';

    // Select a random animal
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById('hintImage').src = currentAnimal.image;
    document.getElementById('hintImage').style.display = 'block';

    // Generate multiple-choice options
    const options = new Set();
    options.add(currentAnimal.name);

    while (options.size < 4) {
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)].name;
        options.add(randomAnimal);
    }

    // Convert the Set back to an array and shuffle it
    const optionsArray = Array.from(options);
    shuffleArray(optionsArray);

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    optionsArray.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkGuess(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('nextButton').style.display = 'none';
}

// Shuffle function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Check the guess
function checkGuess(userGuess) {
    attempts++;
    const feedback = document.getElementById('feedback');
    const streakCount = document.getElementById('streak');

    if (userGuess === currentAnimal.name) {
        streak++;
        streakCount.textContent = `Streak: ${streak}`; 
        feedback.textContent = `Correct! The animal was a ${currentAnimal.name}. It took you ${attempts} attempts.`;
        document.getElementById('nextButton').style.display = 'block';
    } else {
        feedback.textContent = `Wrong guess! Try again.`;
        streak = 0;
    }
}

// Start the game
nextQuestion();

