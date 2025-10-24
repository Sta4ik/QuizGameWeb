export class Question {
    constructor(question, A, B, C, D, correctAnswer)
    {
        this.question = question;
        this.answers = [A, B, C, D];
        this.correctAnswer = correctAnswer;
    }

    showQuestion(questionP, answerButtons){
        questionP.textContent = this.question;

        for(let i = 0; i < this.answers; ++i)
        {
            answerButtons[i].textContent = this.answers[i];
        }
    }

    isCorrect(selected){
        return selected === this.correctAnswer;
    }
}
