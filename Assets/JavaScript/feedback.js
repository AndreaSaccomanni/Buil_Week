const arrayStar = document.querySelectorAll(".singleStar");

const stars = document.querySelectroAll(".star");
stars[0].addEventListener("mouseenter", function () {
  stars[0].setAttribute("fill", "#00FFFF");
});

const removeBorder = () => {
  const input = document.querySelector("input");
  input.classList.add("removeBorder");
};
const input = document.querySelector("input");
input.onclick = removeBorder;
