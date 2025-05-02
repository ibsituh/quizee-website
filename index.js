const questions = [
    {
        question:"Who is founder of facebook?",
        answers: [
            { text:  "Elon Musk", correct: false},
            { text:  "Mark Zuckerberg", correct: true},
            { text:  "Ritest Agarwal", correct: false},
            { text:  "Steve Jobs", correct: false},
        ]
    },
    {
        question:"Who is the father of the computer?",
        answers: [
            { text:  "Elon Musk", correct: false},
            { text:  "Mark Zuckerberg", correct: true},
            { text:  "Ritest Agarwal", correct: false},
            { text:  "Charles Babbage", correct: false},
        ] 
    },
    {
        question:"What is the full form of E-mail?",
        answers: [
            { text:  "Electric Mail", correct: false},
            { text:  "Electronic Mail", correct: true},
            { text:  "Exchange Mail", correct: false},
            { text:  "Engagement Mail", correct: false},
        ]
    },
    {
        question:"In the virtual world, WWW stands for?",
        answers: [
            { text:  "World Without Windows", correct: false},
            { text:  "World Wide Web", correct: true},
            { text:  "World Wide Web Application", correct: false},
            { text:  "World Wide Warehouse", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next";
    showQuestion();
}


