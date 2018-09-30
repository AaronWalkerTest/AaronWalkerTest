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

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 70;
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}