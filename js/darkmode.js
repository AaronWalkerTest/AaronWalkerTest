function toggleDark() {


    var body = document.getElementById("content-container");

    if (body.classList = "center") {
        body.classList.remove("center");
        body.classList.add("light");
        
    } else {
        body.classList.remove("light");
        body.classList.add("center");
    }
}
