window.onload = function () {
  const path = document.getElementById("star1");
  path.removeAttribute("fill");
};
const arrayStar = document.querySelectorAll(".stars");
arrayStar[0].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
};
arrayStar[0].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
};

for (let i = 1; i < arrayStar.length; i++) {
  arrayStar[i].onmouseenter = function () {
    for (let j = 0; j <= i; j++) {
      arrayStar[j].style.fill = "#00FFFF";
    }
    arrayStar[i].onmouseleave = function () {
      for (let j = 0; j <= i; j++) {
        arrayStar[j].style.fill = "#0B103B";
      }
    }
  };
};

 arrayStar[i].onclick = function () {
    for (let j = 0; j <= i; j++) {
      const path = arrayStar[j].queryselector(".stars");
      path.removeAttribute("fill");
      }
    }
     
    
    
/*arrayStar[1].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
};
arrayStar[1].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
};

arrayStar[2].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
  arrayStar[2].style.fill = "#00FFFF";
};
arrayStar[2].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
  arrayStar[2].style.fill = "#0B103B";
};
arrayStar[3].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
  arrayStar[2].style.fill = "#00FFFF";
  arrayStar[3].style.fill = "#00FFFF";
};
arrayStar[3].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
  arrayStar[2].style.fill = "#0B103B";
  arrayStar[3].style.fill = "#0B103B";
};
arrayStar[4].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
  arrayStar[2].style.fill = "#00FFFF";
  arrayStar[3].style.fill = "#00FFFF";
  arrayStar[4].style.fill = "#00FFFF";
};
arrayStar[4].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
  arrayStar[2].style.fill = "#0B103B";
  arrayStar[3].style.fill = "#0B103B";
  arrayStar[4].style.fill = "#0B103B";
};
arrayStar[1].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
};
arrayStar[1].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
};
arrayStar[1].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
};
arrayStar[1].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
};
arrayStar[1].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
};
arrayStar[1].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
};
arrayStar[1].onmouseenter = function () {
  arrayStar[0].style.fill = "#00FFFF";
  arrayStar[1].style.fill = "#00FFFF";
};
arrayStar[1].onmouseleave = function () {
  arrayStar[0].style.fill = "#0B103B";
  arrayStar[1].style.fill = "#0B103B";
};*/
