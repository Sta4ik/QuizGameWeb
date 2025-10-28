export class Questions{
    constructor(questions, answer, correct){
        this.questions = questions;
        this.answer = answer; 
        this.correct = correct;
    }
}

export let arrayQuiz = [
    {
        question: 'First question',
        answerText: ["A", "B", "C", "D"],
        correct: 1,
    },
    {
        question: 'Second question',
        answerText: ["Z", "X", "C", "V"],
        correct: 0,
    },    
    {
        question: 'Third question',
        answerText: ["J", "K", "L", "P"],
        correct: 3,
    },
]