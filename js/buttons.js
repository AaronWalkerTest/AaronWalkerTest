function experimentalButton() {
    window.location.href = "experimental.html";
}   

function logoButton() {
    window.location.href = "index.html";
}

function toggleVisible(divId) {
    var contactDiv = document.getElementById(divId);
    if (contactDiv.style.display === "none") {
        contactDiv.style.display = "block";
    } else {
        contactDiv.style.display = "none";
    }
}