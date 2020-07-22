export const closeModal = () => {
    document.getElementById("modal").style.display = "none";
}

export const showSuccessMessage = (message, shouldClose) => {
    const successMessageElement = document.getElementById("success-message");
    console.log("i got call");
    successMessageElement.innerText = message;
    successMessageElement.style.display = "block";

    if(shouldClose) {
        closeModal();
    }

    setTimeout(() => {
        successMessageElement.innerText = "";
        successMessageElement.style.display = "none";
    }, 3000);
}