import { createToast } from "./toast.js";

let userScore = 0;

export const quizUI = function (datas) {
  // create the main container fragment
  const carouselFrags = document.createDocumentFragment();

  // create the carousel inner div
  const carouselInner = document.createElement("div");
  carouselInner.classList.add("carousel-inner", "quiz-screen");
  carouselFrags.appendChild(carouselInner);

  for (let i = 0; i < datas.length; i++) {
    const { question, correct_answer, incorrect_answers } = datas[i];

    // create each section of the carousel
    const section = document.createElement("section");
    section.classList.add("carousel-item");
    section.id = `section${i + 1}`;

    if (i === 0) {
      section.classList.add("active");
    }

    carouselInner.appendChild(section);

    // create the question title element
    const sectionTitle = document.createElement("h2");
    sectionTitle.innerHTML = question;
    section.appendChild(sectionTitle);

    // create the solution group div
    const optionGroup = document.createElement("div");
    optionGroup.classList.add("sol-group");
    section.appendChild(optionGroup);

    // randomize all the available options
    const optionAvail = [...incorrect_answers, correct_answer];
    optionAvail.sort(() => Math.random() - 0.5);

    // create the solution options
    for (let j = 0; j < 4; j++) {
      const optionInput = document.createElement("input");
      const optionLabel = document.createElement("label");

      optionInput.type = "radio";
      optionInput.classList.add("btn-check");
      optionInput.name = `section${i + 1}-radio`;
      optionInput.id = `section${i + 1}-radio${j + 1}`;
      optionInput.autocomplete = "off";
      optionInput.value = optionAvail[j];
      optionGroup.appendChild(optionInput);

      optionLabel.classList.add("btn", "btn-outline-light");
      optionLabel.htmlFor = `section${i + 1}-radio${j + 1}`;
      optionLabel.innerHTML = optionAvail[j];
      optionGroup.appendChild(optionLabel);

      optionInput.onclick = function () {
        if (this.value === correct_answer) {
          userScore++;
        }
      };
    }
  }

  // create control btn group
  const controlGroup = document.createElement("div");
  controlGroup.classList.add("control-group");
  carouselFrags.appendChild(controlGroup);

  // create previous btn for control group
  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.dataset.bsTarget = "#carouselContainer";
  prevBtn.classList.add("btn", "btn-dark");
  prevBtn.dataset.bsSlide = "prev";
  prevBtn.textContent = "Prev";
  controlGroup.appendChild(prevBtn);

  // create next btn for control group
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.dataset.bsTarget = "#carouselContainer";
  nextBtn.classList.add("btn", "btn-primary");
  nextBtn.dataset.bsSlide = "next";
  nextBtn.textContent = "Next";
  controlGroup.appendChild(nextBtn);

  document.getElementById("carouselContainer").appendChild(carouselFrags);
};

export function showSubmitBtn() {
  const sectionItems = document.querySelectorAll(".quiz-screen .carousel-item");
  const nextBtn = document.querySelector(".control-group .btn-primary");
  const carouselContainer = document.getElementById("carouselContainer");

  carouselContainer.addEventListener("slid.bs.carousel", () => {
    const lastSection = sectionItems[sectionItems.length - 1];

    if (lastSection?.classList.contains("active")) {
      nextBtn.textContent = "Submit";
      nextBtn.classList.replace("btn-primary", "btn-success");

      nextBtn.onclick = function () {
        createToast("Score card", `You scored ${userScore} / 10.`, true);
        userScore = 0;
      };
    } else {
      nextBtn.textContent = "Next";
      nextBtn.classList.replace("btn-success", "btn-primary");
    }
  });
}
