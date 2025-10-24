import { Question } from "./question.js";

const startBut = document.getElementById("start");
const startBlock = document.getElementById("startBlock");
const questionBlock = document.getElementById("questionBlock");

const questionP = document.getElementById("question");

const answerButtons = Array.from(document.getElementById("answer").children);

function goToQuestion(){
    startBlock.style.display = "none";
    questionBlock.style.display = "block";
};

startBut.addEventListener('click', goToQuestion);