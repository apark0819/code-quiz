var time = document.getElementById("time");
var timer = document.getElementById("timer");
var start = document.getElementById("startbtn");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choice = document.getElementById("choice");

var timer;
var timeRemaining = 60;
var currentQuestion = 0;

var questionsAnswered = 0;
var correctCount = 0;

var quizQuestions = [
    {
        question: "What is HTML?",
        choices: [
            {choice: "Hypertext Markup Language", True: true, sortIndex: 0},
            {choice: "How to make lasagna", True: false, sortIndex: 0},
            {choice: "How to make lemons", True: false, sortIndex: 0},
            {choice: "None", isCorrect: false, isTrue: 0}
        ],
        sortIndex: 0
    },

    {
        question: "What is Javascript mainly used for?",
        choices: [
            {choice: "For web-based applications and web browsers.", True: true, sortIndex: 0},
            {choice: "For fun.", True: false, sortIndex: 0},
            {choice: "For leisure.", True: false, sortIndex: 0},
            {choice: "For nothing.", True: false, sortIndex: 0}
        ],
        sortIndex: 0
    },
    
    {
        question: "What is CSS?",
        choices: [
            {choice: "Cascading Style Sheets", True: true, sortIndex: 0},
            {choice: "Cascading Style Sleeps", True: false, sortIndex: 0},
            {choice: "Cascading Style Sheeps", True: false, sortIndex: 0},
            {choice: "None", True: false, sortIndex: 0}
        ],
        sortIndex: 0
    },

    {
    question: "Is coding fun?",
    choices: [
        {choice: "Of course", True: true, sortIndex: 0},
        {choice: "No", True: false, sortIndex: 0},
        {choice: "Sometimes", True: false, sortIndex: 0},
        {choice: "What is coding?", True: false, sortIndex: 0}
    ],
    sortIndex: 0
},



];