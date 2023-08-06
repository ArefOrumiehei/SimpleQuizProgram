const quizData = [
    {
    id: 1,
    question: "What was the fastest growing web browser in 2020?",
    options: [
            { answer: "Microsoft Edge", isCorrect: true },
            { answer: "Firefox", isCorrect: false },
            { answer: "DuckDuckGo", isCorrect: false },
            { answer: "Internet Explorer", isCorrect: false },
        ],
    },
    {
    id: 2,
    question: "Which University offered the first-ever academic programme in Computer Science?",
    options: [
            { answer: "Harvard University", isCorrect: false },
            { answer: "MIT", isCorrect: false },
            { answer: "University of Glasgow", isCorrect: false },
            { answer: "Cambridge University", isCorrect: true },
        ],
    },
    {
    id: 3,
    question: "How much did Steve Job’s first computer go for at auction?",
    options: [
            { answer: '$1.2 million', isCorrect: false },
            { answer: '$442,000', isCorrect: true },
            { answer: "$223,000", isCorrect: false },
            { answer: '$3.4 million', isCorrect: false },
        ],
    },
    {
    id: 4,
    question: 'Which company developed the first mobile phone?',
    options: [
            { answer:  'Motorola', isCorrect: true },
            { answer: "Nokia", isCorrect: false },
            { answer: "Samsung", isCorrect: false },
            { answer: "Apple", isCorrect: false },
        ],
    },
];


const quizScreen = document.querySelector('.questions')
const resultScreen = document.querySelector('.result')
const questionContainer = document.querySelector('.question')
const submitBtn = document.querySelector('.submit')
const retryBtn = document.querySelector('.retry')
const answersContainer = document.querySelector('.answers')
const correctEl = document.querySelector('.correct')
const wrongEl = document.querySelector('.wrong')
const scoreEl = document.querySelector('.score')


let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer

retryBtn.addEventListener('click' , () => {
    quizScreen.style.display = 'block'
    resultScreen.style.display = 'none'
    retryQuiz()
})

function showResult() {
    quizScreen.style.display = 'none'
    resultScreen.style.display = 'block'
    correctEl.textContent = `Correct Answers : ${correctCount}`
    wrongEl.textContent = `Wrong Answers : ${wrongCount}`
    scoreEl.textContent = `Score : ${(correctCount - wrongCount) * 10}`
}

function showQuestion(qNumber) {
    qNumber === quizData.length && showResult()
    selectedAnswer = null
    questionContainer.textContent = quizData[qNumber].question
    answersContainer.innerHTML = quizData[qNumber].options.map((item , index) => 
        `<div class="answer">
            <input type="radio" name="answer" id="answer${index}" value=${item.isCorrect}>
            <label for="answer${index}">${item.answer}</label>
        </div>`
    ).join('')

    selectAnswer()
}
showQuestion(qIndex)

function selectAnswer() {
    answersContainer.querySelectorAll('input').forEach(item => {
        item.addEventListener('click' , (e) => selectedAnswer = e.target.value)
    })
}

const submitAnswer = () => {
    submitBtn.addEventListener('click' , () => {
        if (selectedAnswer !== null) {
            selectedAnswer === 'true' ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        } else {
            return alert('please select an answer')
        }
    })
}

submitAnswer()

const retryQuiz = () => {
    qIndex = 0
    correctCount = 0
    wrongCount = 0
    total = 0
    showQuestion(qIndex)
}