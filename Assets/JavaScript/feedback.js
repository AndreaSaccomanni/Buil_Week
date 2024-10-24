//per far illuminare la prima stella fissa
window.onload = function () {
  const path = document.getElementById("star1");
};
const arrayStar = document.querySelectorAll(".singleStars");

//per illuminare le stelle passandoci sopra con il mouse

for (let i = 0; i < arrayStar.length; i++) {
  arrayStar[i].onclick = function () {
    const highlighted = document.querySelectorAll(".highlighted");
    highlighted.forEach((star) => star.classList.remove("highlighted"));
    for (let j = 0; j <= i; j++) {
      arrayStar[j].classList.add("highlighted");
    }
  };

  arrayStar[i].onmouseenter = function () {
    for (let j = 0; j <= i; j++) {
      arrayStar[j].classList.add("select");
    }
  };

  arrayStar[i].onmouseleave = function () {
    for (let j = 0; j <= i; j++) {
      arrayStar[j].classList.remove("select");
    }
  };
}

const countOfStars = function () {
  return document.querySelectorAll(".singleStars.highlighted").length;
};

const button = document.getElementById("btn");

button.onclick = function () {
  const mainContent = document.getElementById("mainContent");
  const badFeedback = document.getElementById("badFeedback");
  const midFeedback = document.getElementById("midFeedback");
  const bestFeedback = document.getElementById("bestFeedback");
  const results = document.getElementsByClassName("results");

  const numberOfStar = countOfStars();
  if (numberOfStar <= 6) {
    results[0].classList.add("hiddenDiv");
    badFeedback.classList.remove("hiddenDiv");
  } else if (numberOfStar === 7 || numberOfStar === 8) {
    results[0].classList.add("hiddenDiv");
    midFeedback.classList.remove("hiddenDiv");
  } else if (numberOfStar === 9 || numberOfStar === 10) {
    results[0].classList.add("hiddenDiv");
    bestFeedback.classList.remove("hiddenDiv");
  }
};
