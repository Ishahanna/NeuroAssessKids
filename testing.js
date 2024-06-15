const startBtn = document.querySelector('.start-btn');
const infoBox = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const resultSection = document.querySelector('.result-section');
const homeBtns = document.querySelectorAll('.home-btn');
const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const locationBtn = document.querySelector('.location-btn');

let questionCount = 0;
let questionNumb = 1;
let userAnswers = [];

const questions = [
    {
        numb: 1,
        question: "Does not pay attention to details or make careless mistakes with, (example: homework)",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 2,
        question: "Has difficulty keeping attention to what needs to be done",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 3,
        question: "Does not seem to listen when spoken to directly",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 4,
        question: "Does not follow through when given directions and fails to finish activities(not due to refusal or failure to understand)",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 5,
        question: "Has difficulty organizing tasks and activities",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 6,
        question: "If you point at something across the room, does your child look at it? (FOR EXAMPLE, if you point at a toy or an animal, does your child look at the toy or animal?)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 7,
        question: "Have you ever wondered if your child might be deaf?",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 8,
        question: "Is your child interested in other children? (FOR EXAMPLE, does your child watch other children, smile at them, or go to them?)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 9,
        question: "Does your child get upset by everyday noises? (FOR EXAMPLE, does your child scream or cry to noise such as a vacuum cleaner or loud music?)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 10,
        question: "If you turn your head to look at something, does your child look around to see what you are looking at?",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 11,
        question: "Leaves seat when remaining seated is expected",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 12,
        question: "Runs about or climbs too much when remaining seated is expected",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 13,
        question: "Has difficulty playing or beginning quiet play activities",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 14,
        question: "Talks too much",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 15,
        question: "Blurts out answers before questions have been completed",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 16,
        question: "Does your child respond when you call his or her name? (FOR EXAMPLE, does he or she look up, talk or babble, or stop what he or she is doing when you call his or her name?)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 17,
        question: "Does your child like movement activities? (FOR EXAMPLE, being swung or bounced on your knee)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 18,
        question: "Does your child point with one finger to show you something interesting? (FOR EXAMPLE, pointing to an airplane in the sky or a big truck in the road)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 19,
        question: "If something new happens, does your child look at your face to see how you feel about it? (FOR EXAMPLE, if he or she sees a new toy, will he or she look at your face?)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 20,
        question: "Does your child try to copy what you do? (FOR EXAMPLE, wave bye-bye, clap, or make a funny noise when you do)",
        category: "ASD",
        options: ["a. Yes", "b. No",],
    },
    {
        numb: 21,
        question: "Is afraid to try new things for fear of making mistakes",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 22,
        question: "Is self-conscious or easily embarrassed",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 23,
        question: "Is touchy or easily annoyed by others",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 24,
        question: "Avoids, dislikes, or does not want to start tasks that require ongoing mental effort",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
    {
        numb: 25,
        question: " Is fearful, anxious, or worried",
        category: "ADHD",
        options: [ "a. Never", "b. Occasionally", "c. Often", "d. Very often", ],
    },
];  

startBtn.onclick = () => {
    infoBox.classList.add('active');
    main.classList.add('active');
};

exitBtn.onclick = () => {
    infoBox.classList.remove('active');
    main.classList.remove('active');
};

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    infoBox.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    
    showQuestions(0);
    questionCounter(1);
    homeBtns.forEach(btn => btn.style.display = 'inline-block');
};


tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.add('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1; 
    userAnswers = [];
    showQuestions(questionCount);
    questionCounter(questionNumb);
};

locationBtn.onclick = () => {
    window.location.href = "https://www.google.com/maps/search/lokasi+pakar+perkembangan+kanak-kanak+di+johor/@1.5402513,103.5946231,13z/data=!3m1!4b1?entry=ttu";  // Update this with the actual URL
};

homeBtns.forEach(btn => btn.onclick = () => {
    quizSection.classList.remove('active');
    quizBox.classList.remove('active');
    main.classList.remove('active');
    resultSection.classList.remove('active');
    homeBtns.forEach(btn => btn.style.display = 'none');
    questionCount = 0;
    questionNumb = 1;
    userAnswers = [];
    showQuestions(questionCount);
    questionCounter(questionNumb);
});

nextBtn.onclick = () => {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption) {
        optionSelected(selectedOption);
        if (questionCount < questions.length - 1) {
            questionCount++;
            showQuestions(questionCount);
            questionNumb++;
            questionCounter(questionNumb);
        } else {
            calculateResult(); // Calculate result after the last question
        }
    } else {
        alert("Please select an option before proceeding.");
    }
};

backBtn.onclick = () => {
    if (questionCount > 0) {
        questionCount--;
        showQuestions(questionCount);
        questionNumb--;
        questionCounter(questionNumb);
    }
};

const optionList = document.querySelector('.option-list');

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
    let optionTag = '';
    if (questions[index].category === "ADHD") {
        optionTag = `
            <div class="option" data-value="0"><span>${questions[index].options[0]}</span></div>
            <div class="option" data-value="1"><span>${questions[index].options[1]}</span></div>
            <div class="option" data-value="2"><span>${questions[index].options[2]}</span></div>
            <div class="option" data-value="3"><span>${questions[index].options[3]}</span></div>`;
    } else if (questions[index].category === "ASD") {
        optionTag = `
            <div class="option" data-value="1"><span>${questions[index].options[0]}</span></div>
            <div class="option" data-value="0"><span>${questions[index].options[1]}</span></div>`;
    }
    optionList.innerHTML = optionTag;
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.onclick = () => optionSelected(opt));
}

function optionSelected(answer) {
    let userAnswer = parseInt(answer.getAttribute('data-value'));
    userAnswers[questionCount] = userAnswer;
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    answer.classList.add('selected');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

function calculateResult() {
    let asdScore = 0;
    let adhdScore = 0;
    let asdQuestionsCount = 0;
    let adhdQuestionsCount = 0;

    for (let i = 0; i < userAnswers.length; i++) {
        if (questions[i].category === 'ASD') {
            asdScore += userAnswers[i];
            asdQuestionsCount++;
        } else if (questions[i].category === 'ADHD') {
            adhdScore += userAnswers[i];
            adhdQuestionsCount++;
        }
    }

    let asdPercentage = (asdScore / (asdQuestionsCount * 1)) * 100; // ASD max score is 1 per question
    let adhdPercentage = (adhdScore / (adhdQuestionsCount * 3)) * 100; // ADHD max score is 3 per question

    let asdResult = getRiskLevel(asdScore, asdQuestionsCount, 1);
    let adhdResult = getRiskLevel(adhdScore, adhdQuestionsCount, 3);

    showResultBox(asdResult, adhdResult, asdScore, adhdScore, asdPercentage, adhdPercentage);
}

function getRiskLevel(score, questionsCount, maxScore) {
    let maxPossibleScore = questionsCount * maxScore;
    let percentage = (score / maxPossibleScore) * 100;

    if (percentage <= 30) {
        return 'LOW-RISK';
    } else if (percentage <= 70) {
        return 'MEDIUM-RISK';
    } else {
        return 'HIGH-RISK';
    }
}

function showResultBox(asdResult, adhdResult, asdScore, adhdScore, asdPercentage, adhdPercentage) {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const asdResultText = document.querySelector('.asd-result');
    const adhdResultText = document.querySelector('.adhd-result');
    asdResultText.textContent = `ASD Level: ${asdResult}`;
    adhdResultText.textContent = `ADHD Level: ${adhdResult}`;

    const asdTotalScoreText = document.querySelector('.asd-total-score');
    const adhdTotalScoreText = document.querySelector('.adhd-total-score');
    asdTotalScoreText.textContent = `Total Score: ${asdScore} / 10`;
    adhdTotalScoreText.textContent = `Total Score: ${adhdScore} / 45`;

    updateProgress('.asd-progress', '.asd-progress-value', asdPercentage);
    updateProgress('.adhd-progress', '.adhd-progress-value', adhdPercentage);
}

function updateProgress(progressSelector, valueSelector, percentage) {
    const circularProgress = document.querySelector(progressSelector);
    const progressValue = document.querySelector(valueSelector);
    let progressStartValue = 0;
    let progressEndValue = Math.round(percentage);
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#28c26b ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

// JavaScript code to toggle active class on Screening and Guidance sections
document.addEventListener('DOMContentLoaded', function () {
    const screeningSection = document.querySelector('.Screening');
    const guidanceSection = document.querySelector('.Guidance');

    // Function to add active class to the section
    function activateSection(section) {
        section.classList.add('active');
    }

    // Check if the section is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
});
