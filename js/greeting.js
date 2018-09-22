var today = new Date();
var hour = today.getHours();
var greeting;

if (hour > 18) {
    greeting = "Good Evening!";
}
else if (hour > 12) {
    greeting = "Good Afternoon!";
}
else {
    greeting = "Good Morning!";
}

document.write('<h3>' + greeting + " I'm Aaron Walker, and I like to make stuff." + '<h3>');