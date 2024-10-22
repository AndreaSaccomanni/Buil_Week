const checkbox = document.querySelector("#checkbox");

checkbox.onclick = function () {
  const btn = document.querySelector(".goOn");
  if (checkbox.checked) {
    btn.onclick = function () {
      window.location.href = "http://127.0.0.1:5501/benchmark.html";
    };
  } else if (!checkbox.checked) {
    btn.onclick = function () {
      alert("You must select the checkbox!");
    };
  }
};
