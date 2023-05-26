const form = document.querySelector(".form-quizz");
const answers = ["a", "c", "b", "b", "a"];
const answerResult = document.querySelector(`.result `);

let point = 0;
let results = [];

console.log("Starting");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit detected");

  for (i = 1; i < 6; i++) {
    results.push(document.querySelector(`input[name="q${i}"]:checked`).value);
  }
  checkResults();
  console.log("result :" + results);
  console.log(answers);
  console.log(point);
  results = [];
  point = 0;
});

function checkResults() {
  // comparer chaque reponse
  for (var i = 0; i < 5; i++) {
    if (answers[i] == results[i]) {
      //   console.log("true");
      point += 1;
      changeColor(i, "true");
    } else {
      //   console.log("false");
      changeColor(i, "false");
    }
  }

  changeTexte(point);
}

function changeTexte(point) {
  answerResult.textContent = `votre score et de ${point}/5`;
}

function changeColor(i, color) {
  const container = document.querySelectorAll(".q-container");
  container[i].classList.add(color);
}
