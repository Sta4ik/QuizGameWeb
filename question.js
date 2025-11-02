export class Questions{
    constructor(questions, answer, correct){
        this.questions = questions;
        this.answer = answer; 
        this.correct = correct;
    }
}

export const arrayQuiz = [
    {   
        question: "Какой язык используется для стилизации веб-страниц?",
        answerText: ["HTML", "CSS", "JavaScript", "Python"],
        correct: 1
    },   
    {   
        question: "Кто написал роман 'Преступление и наказание'?",
        answerText: ["Лев Толстой", "Александр Пушкин", "Фёдор Достоевский", "Антон Чехов"],
        correct: 2
    },   
    {
        question: "Сколько планет в Солнечной системе?",
        answerText: ["7", "8", "9", "10"],
        correct: 1
    },   
    { 
        question: "Какой элемент обозначается символом 'O'?",
        answerText: ["Золото", "Кислород", "Олово", "Осмий"],
        correct: 1
    },   
    {
        question: "Какой город является столицей Японии?",
        answerText: ["Пекин", "Сеул", "Токио", "Бангкок"],
        correct: 2
    },   
    {
        question: "Сколько градусов в прямом угле?",
        answerText: ["45", "90", "180", "360"],
        correct: 1
    },   
    {   
        question: "Какой цвет получается при смешивании синего и жёлтого?",
        answerText: ["Зелёный", "Оранжевый", "Фиолетовый", "Коричневый"],
        correct: 0
    },   
    {   
        question: "Кто изобрёл лампу накаливания?",
        answerText: ["Никола Тесла", "Александр Белл", "Томас Эдисон", "Исаак Ньютон"],
        correct: 2
    },   
    {   
        question: "Какой океан самый большой?",
        answerText: ["Атлантический", "Индийский", "Северный Ледовитый", "Тихий"],
        correct: 3
    },   
    {   
        question: "Какой язык программирования используется для создания интерактивности на веб-страницах?",
        answerText: ["HTML", "CSS", "JavaScript", "SQL"],
        correct: 2
    }   
];