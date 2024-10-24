window.onload = function () {
  const btn = document.querySelector(".goOn");

  btn.onclick = function () {
    if (checkbox.checked) {
      window.location.href = "http://127.0.0.1:5501/benchmark.html";
    } else {
      alert("You must select the checkbox!");
    }
  };
};
