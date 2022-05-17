const topic = prompt("Revise which topic? (Q = Question Tags)")
if (topic == "Q") {
    alert("Question Tags!")
} else {
    alert("Invalid!")
}

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function qt() {
    if (topic == "Q") {
        const questions = [
            {
                question: "Anna called Sam, ___?",
                answers: [
                    { text: "didn't she", correct: true },
                    { text: "did she", correct: false },
                ]
            },
            {
                question: "She won't tell us the truth, ___?",
                answers: [
                    { text: "will she", correct: true },
                    { text: "won't she", correct: false },
                ]
            },
            {
                question: "Get out, ___?",
                answers: [
                    { text: "will he", correct: false },
                    { text: "won't you", correct: true },
                ]
            },
            {
                question: "Rosa has got a pet cat, ___?",
                answers: [
                    { text: "doesn't she", correct: false },
                    { text: "hasn't she", correct: true },
                ]
            },
            {
                question: "They aren't going to Paris, ___?",
                answers: [
                    { text: "are they", correct: true },
                    { text: "will they", correct: false },
                ]
            },
            {
                question: "She can sing well, ___?",
                answers: [
                    { text: "can she", correct: false },
                    { text: "can't she", correct: true },
                ]
            },
            {
                question: "Paul will do the shopping, ___?",
                answers: [
                    { text: "willn't he", correct: false },
                    { text: "won't he", correct: true },
                ]
            },
            {
                question: "He never speaks rudely, ___?",
                answers: [
                    { text: "does he", correct: true },
                    { text: "don't he", correct: false },
                ]
            },
            {
                question: "Let's clean the room, ___?",
                answers: [
                    { text: "shall we", correct: true },
                    { text: "will us", correct: false },
                ]
            },
            {
                question: "Mary didn't use to work so late, ___?",
                answers: [
                    { text: "did she", correct: true },
                    { text: "didn't she", correct: false },
                ]
            },
            {
                question: "She has breakfast at 7:30am, ___?",
                answers: [
                    { text: "doesn't she", correct: true },
                    { text: "hasn't she", correct: false },
                ]
            },
            {
                question: "John spoke to Nick, ___?",
                answers: [
                    { text: "did he", correct: false },
                    { text: "didn't he", correct: true },
                ]
            },
            {
                question: "Rania wears glasses, ___?",
                answers: [
                    { text: "does she", correct: false },
                    { text: "doesn't she", correct: true },
                ]
            },
            {
                question: "I am early for the meeting, ___?",
                answers: [
                    { text: "aren't I", correct: true },
                    { text: "amn't I", correct: false },
                ]
            }
        ]
    }
}
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    setStatusClass(selectedButton, selectedButton.dataset.correct)
    //Array.from(answerButtonsElement.children).forEach(button => {
        //setStatusClass(button, button.dataset.correct)
    //})    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct') 
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Anna called Sam, ___?",
        answers: [
            { text: "didn't she", correct: true },
            { text: "did she", correct: false },
        ]
    },
    {
        question: "She won't tell us the truth, ___?",
        answers: [
            { text: "will she", correct: true },
            { text: "won't she", correct: false },
        ]
    },
    {
        question: "Get out, ___?",
        answers: [
            { text: "will he", correct: false },
            { text: "won't you", correct: true },
        ]
    },
    {
        question: "Rosa has got a pet cat, ___?",
        answers: [
            { text: "doesn't she", correct: false },
            { text: "hasn't she", correct: true },
        ]
    },
    {
        question: "They aren't going to Paris, ___?",
        answers: [
            { text: "are they", correct: true },
            { text: "will they", correct: false },
        ]
    },
    {
        question: "She can sing well, ___?",
        answers: [
            { text: "can she", correct: false },
            { text: "can't she", correct: true },
        ]
    },
    {
        question: "Paul will do the shopping, ___?",
        answers: [
            { text: "willn't he", correct: false },
            { text: "won't he", correct: true },
        ]
    },
    {
        question: "He never speaks rudely, ___?",
        answers: [
            { text: "does he", correct: true },
            { text: "don't he", correct: false },
        ]
    },
    {
        question: "Let's clean the room, ___?",
        answers: [
            { text: "shall we", correct: true },
            { text: "will us", correct: false },
        ]
    },
    {
        question: "Mary didn't use to work so late, ___?",
        answers: [
            { text: "did she", correct: true },
            { text: "didn't she", correct: false },
        ]
    },
    {
        question: "She has breakfast at 7:30am, ___?",
        answers: [
            { text: "doesn't she", correct: true },
            { text: "hasn't she", correct: false },
        ]
    },
    {
        question: "John spoke to Nick, ___?",
        answers: [
            { text: "did he", correct: false },
            { text: "didn't he", correct: true },
        ]
    },
    {
        question: "Rania wears glasses, ___?",
        answers: [
            { text: "does she", correct: false },
            { text: "doesn't she", correct: true },
        ]
    },
    {
        question: "I am early for the meeting, ___?",
        answers: [
            { text: "aren't I", correct: true },
            { text: "amn't I", correct: false },
        ]
    }
]