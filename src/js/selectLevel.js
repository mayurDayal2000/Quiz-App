/**
 * Function to handle the selection of a level.
 * @throws {Error} If there is an issue with accessing or setting localStorage.
 */
export function selectedLevel() {
  const levels = document.querySelectorAll(".level-box");

  /**
   * Handles the click event on a level element.
   * 
   * @param {Event} event - The click event object.
   * @throws {TypeError} - If event is not provided.
   */
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
