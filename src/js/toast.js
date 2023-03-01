export const createToast = function (title, msg) {
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

  const toast = document.createElement("div");
  toast.classList.add("toast", "show");

  const toastHeader = document.createElement("header");
  toastHeader.classList.add("toast-header", "text-bg-primary");

  const toastTitle = document.createElement("strong");
  toastTitle.classList.add("me-auto");
  toastTitle.textContent = title;
  toastHeader.appendChild(toastTitle);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("btn-close");
  closeBtn.type = "button";
  closeBtn.dataset.bsDismiss = "toast";
  toastHeader.appendChild(closeBtn);

  toast.appendChild(toastHeader);

  const toastBody = document.createElement("div");
  toastBody.classList.add("toast-body");

  const toastMsg = document.createElement("p");
  toastMsg.textContent = msg;
  toastBody.appendChild(toastMsg);

  toast.appendChild(toastBody);

  container.appendChild(toast);

  document.body.insertAdjacentElement("afterbegin", container);

  document.querySelector(".btn-close").addEventListener("click", () => {
    document.body.removeChild(container);
    document.querySelector(".container").style.zIndex = 0;
  });
};
