export const closeModal = () => {
  document.getElementById("modal").style.display = "none";
};

export const showSuccessMessage = (message, shouldClose) => {
  const successMessageElement = document.getElementById("success-message");
  successMessageElement.innerText = message;
  successMessageElement.style.display = "block";

  if (shouldClose) {
    closeModal();
  }

  setTimeout(() => {
    successMessageElement.innerText = "";
    successMessageElement.style.display = "none";
  }, 3000);
};

export const showErrorMessage = (message, shouldClose) => {
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.innerText = message;
  errorMessageElement.style.display = "block";

  if (shouldClose) {
    closeModal();
  }

  setTimeout(() => {
    errorMessageElement.innerText = "";
    errorMessageElement.style.display = "none";
  }, 3000);
};
