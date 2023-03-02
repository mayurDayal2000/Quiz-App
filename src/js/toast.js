export const createToast = function (title, msg, isScored) {
  const container = document.createElement("div");
  container.classList.add(
    "toast-container",
    "position-fixed",
    "w-100",
    "h-100",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  const toast = document.createElement("section");
  toast.classList.add("toast", "show");

  const toastHeader = document.createElement("header");
  toastHeader.classList.add("toast-header", "text-bg-primary");

  const toastTitle = document.createElement("h2");
  toastTitle.classList.add("me-auto", "mb-0");
  toastTitle.style.fontSize = "1rem";
  toastTitle.textContent = title;
  toastHeader.appendChild(toastTitle);

  if (!isScored) {
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("btn-close");
    closeBtn.type = "button";
    closeBtn.dataset.bsDismiss = "toast";
    toastHeader.appendChild(closeBtn);

    closeBtn.onclick = function () {
      document.body.removeChild(container);
      document.querySelector(".container").style.zIndex = 0;
    };
  }

  toast.appendChild(toastHeader);

  const toastBody = document.createElement("article");
  toastBody.classList.add("toast-body");

  const toastMsg = document.createElement("p");
  toastMsg.textContent = msg;
  toastBody.appendChild(toastMsg);

  if (isScored) {
    const toastBtn = document.createElement("button");
    toastBtn.classList.add("btn", "btn-primary");
    toastBtn.textContent = "Play Again!";
    toastBody.appendChild(toastBtn);

    toastBtn.onclick = function () {
      document.querySelector(".load-screen").classList.remove("d-none");
      localStorage.setItem("quiz-status", false);
      document.querySelector(".quiz-screen").remove();
      document.querySelector(".control-group").remove();
      document.body.removeChild(container);
    };
  }

  toast.appendChild(toastBody);

  container.appendChild(toast);

  document.body.insertAdjacentElement("afterbegin", container);
};
