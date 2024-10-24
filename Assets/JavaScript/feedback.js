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
  const feedback = document.getElementById("feedback");
  const results = document.getElementsByClassName("results");

  const numberOfStar = countOfStars();
  if (numberOfStar <= 6) {
    results[0].classList.add("hiddenDiv");
    feedback.classList.remove("hiddenDiv");
  }
};
