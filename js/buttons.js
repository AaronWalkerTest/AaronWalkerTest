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

function move(width, barName) {
    var elem = document.getElementById(barName); 
    var start = 0;
    var id = setInterval(frame, 20);
    function frame() {
        if (start >= width) {
            clearInterval(id);
        } else {
            start++; 
            elem.style.width = start + '%'; 
        }
    }
}

$(window).scroll(function() {
    var top_of_element = $("javaBar").offset().top;
    var bottom_of_element = $("javaBar").offset().top + $("javaBar").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        var elem = document.getElementById(javaBar); 
        var start = 0;
        var id = setInterval(frame, 20);
        function frame() {
            if (start >= 70) {
                clearInterval(id);
            } else {
                start++; 
                elem.style.width = start + '%'; 
            }
        }
    }
    else {
        // The element is not visible, do something else
    }
});