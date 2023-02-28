import { quizUI } from "./quizUI.js";
import { selectedLevel } from "./selectLevel.js";

const fetchQuizData = async function () {
  const choosenDifficulty = localStorage.getItem("questionLevel");

  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=18&difficulty=${choosenDifficulty}&type=multiple`
    );

    if (response.ok) {
      const data = await response.json();
      quizUI(data.results);
    }
  } catch (err) {
    console.error(err);
  }
};

const startQuiz = function () {
  const playBtn = document.querySelector(".play-btn");
  playBtn.addEventListener("click", () => {
    if (localStorage.getItem("questionLevel")) {
      document.querySelector(".quiz-menu").classList.remove("d-none");
      document.querySelector(".load-screen").classList.add("d-none");
      localStorage.setItem("quiz-status", true);
      fetchQuizData();
    } else {
      alert("choose the quiz level first!");
      return;
    }
  });
};

// if user started the quiz, no reload or refresh will affect the game.
if (localStorage.getItem("quiz-status")) {
  document.querySelector(".quiz-menu").classList.remove("d-none");
  document.querySelector(".load-screen").classList.add("d-none");
  fetchQuizData();
}

selectedLevel();

startQuiz();
