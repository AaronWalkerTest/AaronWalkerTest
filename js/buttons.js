function experimentalButton() {
    window.location.href = "experimental.html";
}   

function logoButton() {
    window.location.href = "index.html";
}

$("#divdeps").dialog({
    autoOpen: false,
    show: 'slide',
    resizable: false,
    position: 'center',
    stack: true,
    height: 'auto',
    width: 'auto',
    modal: true
});