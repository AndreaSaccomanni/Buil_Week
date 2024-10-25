const totalQuestions = 10;

function results(correctAnswers) {
  const correctPercentage = (correctAnswers / totalQuestions) * 100;
  const wrongAnswers = totalQuestions - correctAnswers;
  const wrongPercentage = (wrongAnswers / totalQuestions) * 100;

  const correctPerc = document.querySelector(".percentualeCorrect");
  const correctAnsw = document.querySelector(".okAnswers");
  const wrongPerc = document.querySelector(".percentualeWrong");
  const wrongAnsw = document.querySelector(".noAnswers");

  correctPerc.textContent = `${correctPercentage.toFixed(0)}%`;
  correctAnsw.textContent = `${correctAnswers}/${totalQuestions} questions`;
  wrongPerc.textContent = `${wrongPercentage.toFixed(0)}%`;
  wrongAnsw.textContent = `${wrongAnswers}/${totalQuestions} questions`;

}
function donutNonFunzionante(correctAnswers, totalQuestions) {;
    const donutRing = document.querySelector('.donut-ring');
    if (correctAnswers > 0) {
      const correctPercentage = (correctAnswers / totalQuestions) * 100;
      const wrongPercentage = 100 - correctPercentage;
      const strokeDasharray = `${correctPercentage} ${wrongPercentage}`;
      const strokeDashoffset = totalQuestions - wrongPercentage + correctPercentage;
      donutRing.setAttribute('stroke-dasharray', strokeDasharray);
      donutRing.setAttribute('stroke-dashoffset', strokeDashoffset);
    }
}


results(2);