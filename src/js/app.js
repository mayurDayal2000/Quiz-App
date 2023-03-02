import { quizUI, showSubmitBtn } from "./quizUI.js";
import { selectedLevel } from "./selectLevel.js";
import { createToast } from "./toast.js";

const fetchQuizData = async function () {
  const choosenDifficulty = localStorage.getItem("questionLevel");

  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=18&difficulty=${choosenDifficulty}&type=multiple`
    );

    if (response.ok) {
      const data = await response.json();
      quizUI(data.results);
      showSubmitBtn();
      document.querySelector(".quiz-spinner").classList.add("d-none");
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
      document.querySelector(".quiz-spinner").classList.remove("d-none");
      localStorage.setItem("quiz-status", true);
      fetchQuizData();
    } else {
      createToast(
        "Alert Message",
        "Choose the difficulty level first to continue.",
        false
      );

      document.querySelector(".container").style.zIndex = -9999;

      return;
    }
  });
};

// if user started the quiz, no reload or refresh will affect the game.
if (localStorage.getItem("quiz-status") === "true") {
  document.querySelector(".quiz-menu").classList.remove("d-none");
  document.querySelector(".load-screen").classList.add("d-none");
  fetchQuizData();
} else {
  document.querySelector(".quiz-menu").classList.add("d-none");
  document.querySelector(".load-screen").classList.remove("d-none");
}

selectedLevel();

startQuiz();
