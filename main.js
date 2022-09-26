const form = document.forms[0];

form.addEventListener("submit", (e) => {
    const isValid = form.checkValidity();
    if (!isValid) {
        e.preventDefault();
        form.classList.add("validated");
        return;
    }
});
