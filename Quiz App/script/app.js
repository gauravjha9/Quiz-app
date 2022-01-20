const quizDB = [
  {
    question: "Q1. Who is the Prime minister of India",
    a: "Manmohan Singh",
    b: "Narendra Modi",
    c: "Yogi adityanath",
    d: "Arvind Kejriwal",
    ans: "ans2",
  },
  {
    question: "Q2. Fastest Shorthand Writer was",
    a: "Dr. G. D. Bist",
    b: "J.R.D. Tata",
    c: "J.M. Tagore",
    d: "Khudada Khan",
    ans: "ans1",
  },
  {
    question: "Q3. Golf player Vijay Singh belongs to which country?",
    a: "USA",
    b: "Fiji",
    c: "India",
    d: "UK",
    ans: "ans2",
  },
  {
    question: "Q4. What is the Study of human beauty called?",
    a: "Argology",
    b: "Kalology",
    c: "Agrostology",
    d: "Oncology",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsEle) => {
    if (curAnsEle.checked) {
      answer = curAnsEle.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsEle) => (curAnsEle.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length}</h3>
            <button class="btn" onClick="location.reload()"> Restart </button>
        `;
    showScore.classList.remove("scoreArea");
  }
});
