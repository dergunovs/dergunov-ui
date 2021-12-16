function success(message: string) {
  show("success", message);
}

function error(message: string) {
  show("error", message);
}

function info(message: string) {
  show("info", message);
}

function show(type: string, message: string): void {
  if (!document.body.contains(document.querySelector(".ui-toast-block")!)) {
    const toastBlock = document.createElement("div");
    toastBlock.classList.add("ui-toast-block");
    document.body.append(toastBlock);
  }

  const toast = document.createElement("div");
  toast.classList.add("ui-toast", `ui-toast-${type}`);
  toast.innerHTML = message;

  document.querySelector(".ui-toast-block")!.append(toast);

  setTimeout(() => toast.classList.add("ui-toast-visible"), 200);
  setTimeout(() => toast.classList.remove("ui-toast-visible"), 2800);

  setTimeout(() => {
    toast.remove();
    if (!document.body.contains(document.querySelector(".ui-toast"))) {
      document.querySelector(".ui-toast-block")!.remove();
    }
  }, 3000);
}

const toast = { success, error, info };

export default toast;
