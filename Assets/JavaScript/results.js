const totalQuestions = 10;

function results(correctAnswers) {
    const correctPercentage = (correctAnswers / totalQuestions) * 100;
    const wrongAnswers = totalQuestions - correctAnswers;
    const wrongPercentage = (wrongAnswers / totalQuestions) * 100;

    
    const  correctPerc= document.querySelector('.percentualeCorrect');
    const  correctAnsw= document.querySelector('.okAnswers');
    const  wrongPerc= document.querySelector('.percentualeWrong');
    const  wrongAnsw= document.querySelector('.noAnswers');

    correctPerc.textContent= `${correctPercentage.toFixed(0)}%`;
    correctAnsw.textContent=`${correctAnswers}/${totalQuestions} questions`;
    wrongPerc.textContent = `${wrongPercentage.toFixed(0)}%`;
    wrongAnsw.textContent = `${wrongAnswers}/${totalQuestions} questions`;

    if (correctPercentage >= 50) {
        correctElement.classList.add('positive');
        wrongElement.classList.remove('negative');
    } else {
        wrongElement.classList.add('negative');
        correctElement.classList.remove('positive');
    }
}

results(3);