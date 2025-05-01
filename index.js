import data from './data.json' assert {type:'json'};

const noOfQues = data.length;
const eachQuestion = document.getElementById("question");
const qa = document.getElementById("qa");
const answerButtons = document.getElementById("answerbtn");
const nextButton = document.getElementById("next-btn");


const currentIndex = 0;
let score = 0;

function showEachQuestion(){
    nextButton.innerHTML = "Next";
    qa.style.display = "block";
    let currentQues = data[currentIndex];
    eachQuestion.innerHTML = (currentIndex+1)+" "+currentQues.question;
    for(let i=0;i<4;i++){
        const button = document.createElement("button");
        let optionNumber = String.fromCharCode(65+i);
        button.innerHTML = data[currentIndex][optionNumber];
        button.classList.add("btn");
        answerButtons.appendChild(button);
    }
}

nextButton.addEventListener('click',()=>{
    showEachQuestion();
})