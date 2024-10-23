const arrayStar = document.querySelectorAll(".sigleStar");

arrayStar[0].onmouseenter = function () {
  arrayStar[0].svg.path.style.fill = "#00FFFF";
};
arrayStar[0].onmouseleave = function () {
  arrayStar[0].svg.path.style.fill = "#0B103B";
};
