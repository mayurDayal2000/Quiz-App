
export function selectedLevel() {
  const levels = document.querySelectorAll(".level-box");

  
  function handleClick(event) {
    const clickedLevel = event.currentTarget;
    const levelClass = clickedLevel.classList[1];
    const questionLevel = levelClass.split("-")[0];

    levels.forEach((level) => {
      if (level !== clickedLevel) {
        level.classList.remove("active");
      }
    });

    clickedLevel.classList.add("active");
    localStorage.setItem("questionLevel", questionLevel);
  }

  levels.forEach((level) => {
    level.addEventListener("click", handleClick);

    // check the previous selected level after refresh or reload of page
    const levelClass = level.classList[1];
    const questionLevel = levelClass.split("-")[0];
    if (localStorage.getItem("questionLevel") === questionLevel) {
      level.classList.add("active");
    }
  });
}
