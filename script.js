import { Questions } from "./question.js";
import { arrayQuiz } from "./question.js";

const startBut = document.getElementById('start');
const backBut = document.getElementById("back");
const answersBut = Array.from(document.getElementsByClassName("answer"));

const firstBlock = document.getElementById('firstBlock');
const secondBlock = document.getElementById('secondBlock');
const thirdBlock = document.getElementById('thirdBlock');

const questionText = document.getElementById('question');
const scoreText = document.getElementById("score");
let score = 0;

let arrayObject = [];
for(let i = 0; i < arrayQuiz.length; ++i){
    arrayObject[i] = new Questions(arrayQuiz[i].question, arrayQuiz[i].answerText, arrayQuiz[i].correct);
}

function quest(j){
    questionText.textContent = arrayObject[j].questions;
    for(let i = 0; i < answersBut.length; ++i){
        answersBut[i].textContent = arrayObject[j].answer[i];
        answersBut[i].onclick = function(){
            if(arrayObject[j].correct === i){
                console.log('good');
                score += 1;
            } else{
                console.log("not good");
            }

            if(j < arrayObject.length - 1){
                quest(++j);
            } else{
                endQuiz();
            }
        }
    }  
}

function startQuiz(){
    secondBlock.style.display = 'block';
    firstBlock.style.display = 'none';
    quest(0);
}

function endQuiz(){
    scoreText.textContent = `Ваш счёт: ${score}`;
    secondBlock.style.display = 'none';
    thirdBlock.style.display = 'block';

}

function backMain(){
    firstBlock.style.display = 'block';
    thirdBlock.style.display = 'none';
    score = 0;
}


startBut.addEventListener('click', startQuiz);
backBut.addEventListener('click', backMain);