let docTitle = documen.title;
window.addEventListener("blur", () = {
    document.title = "Come Again :(";
})
window.addEventListener("focus",() = {
    document.title = docTitle;
})
