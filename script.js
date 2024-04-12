const quizContainer = document.getElementById('quiz');
const scoreDisplay = document.getElementById('score-value');
const submitButton = document.getElementById('submit');
const skipButton = document.getElementById('skip');

let score = 0;
let currentQuestionIndex = 0;

const questions = [
  {
    image: 'question1.png',
    options: ['35/27', '1', '27/28', '28/27'],
    correctOption: 3
  },
  {
    image: 'question2.png',
    options: ['7', '6', '9', '8'],
    correctOption: 2
  },
  {
    image: 'question3.png',
    options: ['10:6:4', '9:6:4', '4:6:9', '6:10:4'],
    correctOption: 1
  },
  {
    image: 'question4.png',
    options: ['-110', '-115', '-120', '115'],
    correctOption: 1
  },
  {
    image: 'question5.png',
    options: ['4/3', '2/3', '3/4', '3/2'],
    correctOption: 0
  },
  {
    image: 'question6.png',
    options: ['800', '890', '790', '690'],
    correctOption: 2
  },
  {
    image: 'question7.png',
    options: ['p=10, q=42', 'p=11, q=41', 'p=12, q=40', 'None of these'],
    correctOption: 1
  },
  {
    image: 'question8.png',
    options: ['6', '7', '8', '9'],
    correctOption: 2
  },
  {
      image: 'question9.png',
      options: ['-2', '-3', '4', '2'],
      correctOption: 2
    },
  {
    image: 'question10.png',
    options: ['-55/119', '-55/109', '-54/119', '-54/109'],
    correctOption: 1
  }
];



// Function to load the current question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionImage = `<img src="${currentQuestion.image}" alt="Question ${currentQuestionIndex + 1}">`;
  const questionOptions = currentQuestion.options.map((option, index) => `
    <div class="option">
      <input type="radio" name="option" value="${index}" id="option${index}">
      <label for="option${index}">${option}</label>
    </div>
  `).join('');

  quizContainer.innerHTML = questionImage + '<div class="options">' + questionOptions + '</div>';
}

// Function to check the answer and update score
function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert('Please select an option or skip the question!');
    return;
  }

  const selectedOptionIndex = parseInt(selectedOption.value);
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOptionIndex === currentQuestion.correctOption) {
    score += 4;
  } else {
    score -= 1;
  }

  scoreDisplay.textContent = score;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert('Quiz completed! Your final score is ' + score);
    submitButton.disabled = true;
    skipButton.disabled = true;
  }
}

// Function to skip the current question
function skipQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert('Quiz completed! Your final score is ' + score);
    submitButton.disabled = true;
    skipButton.disabled = true;
  }
}

// Load first question when page loads
loadQuestion();

// Event listeners for submit and skip buttons
submitButton.addEventListener('click', checkAnswer);
skipButton.addEventListener('click', skipQuestion);
