window.onload = function () {
  const path = document.getElementById("star1");
  path.removeAttribute("fill");
};

const stars = document.querySelectroAll(".star");
stars.addEventListener("mouseenter", function () {
  stars.setAttribute("fill", "#00FFFF");
});

const removeBorder = () => {
  const input = document.querySelector("input");
  input.classList.add("removeBorder");
};
const input = document.querySelector("input");
input.onclick = removeBorder;
