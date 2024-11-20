const quizData = [
  {
    question: 'dljshdf sdlfhsf?',
    a: 'djdd',
    b: 'dsjsdh',
    c: 'dsfsd',
    d: 'erw',
    correct: 'd',
  },
  {
    question: 'dlfgfger FDFGGsf?',
    a: 'djddert',
    b: 'dsjsdwh',
    c: 'dsfsd445',
    d: 'e4rw',
    correct: 'a',
  },
  {
    question: 'dljshdsdfdsg gfdg gfdggsds?',
    a: 'djdeqbd',
    b: 'dsjsdadh',
    c: 'dsfafdgsd',
    d: 'ergfgdw',
    correct: 'a',
  },
  {
    question: 'dljshdsdfdsf rrrf sdlfhsf?',
    a: 'djdd',
    b: 'dsjsdh',
    c: 'dsfsd',
    d: 'erw',
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz]; // currentQuiz will be added to the array index to get the current question
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// this function will deselect the answers after the user has selected the answer
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  // check to see the selected answer
  let answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2> You answeres ${score}/${quizData.length} questions correctly.</h2>
          <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
