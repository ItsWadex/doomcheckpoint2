document.addEventListener("DOMContentLoaded", function () {
  const changeColorBtn = document.getElementById("change-color-btn");
  const colors = ["red", "blue", "black", "yellow", "pink", "white"];
  let currentIndex = 0;

  changeColorBtn.addEventListener("click", function () {
    const currentColor = colors[currentIndex];
    document.body.style.backgroundColor = currentColor;

    if (currentColor === "black") {
      document.body.style.color = "white";
    } else {
      document.body.style.color = "black";
    }

    currentIndex = (currentIndex + 1) % colors.length;
  });
});
