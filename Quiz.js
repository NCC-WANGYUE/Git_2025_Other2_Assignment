window.onload = function () {
  const correctAnswer = "プロトタイピング"; 
  const buttons = document.querySelectorAll(".choice");
  const result = document.getElementById("result");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      if (this.textContent === correctAnswer) {
        result.textContent = "正解！";
      } else {
        result.textContent = "不正解…";
      }
    });
  });
};
