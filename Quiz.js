window.onload = function () {
  const form = document.getElementById("quizForm");
  const correctAnswer = "プロトタイピング";

  form.onsubmit = function (e) {
    e.preventDefault(); 

    const selected = document.querySelector('input[name="answer"]:checked');
    
    if (!selected) {
      alert("選択肢を選んでください。");
      return;
    }

    if (selected.value === correctAnswer) {
      alert("正解！");
    } else {
      alert("不正解…");
    }
  };
};
